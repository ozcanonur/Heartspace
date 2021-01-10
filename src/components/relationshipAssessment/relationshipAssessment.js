import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ConversationalForm } from 'conversational-form';

import ResultScreen from './resultScreen';
import { questions } from './assessmentQuestions';
import { parseQuestions, getPositiveAndNegativeScores, attachAnswerButtonListeners, makeSessionId } from './helpers';

import classes from './relationshipAssessment.module.scss';

const CHAINED_RESPONSE_TIME = 750;

const RelationshipAssessment = () => {
  const [sessionId, setSessionId] = useState('');
  const [isAssessmentDone, setIsAssessmentDone] = useState(false);
  const [positiveAndNegativeScores, setPositiveAndNegativeScores] = useState({ positivesScore: 0, negativesScore: 0 });

  const formFields = parseQuestions(questions);

  const submitCallback = async function () {
    const formDataSerialized = this.getFormData(true);

    this.addRobotChatResponse(
      `Well done. We are done.&&Reflecting back and regularly assessing your relationship is an important first step.&&Give us a moment while we analyse your answers&&...`
    );

    // Have to do this because the timeout immediately executes
    // Does not wait for robot chat response to finish
    const resultScreenTimeoutLength = CHAINED_RESPONSE_TIME * 6 + 2000;

    setTimeout(() => {
      const positiveAndNegativeScores = getPositiveAndNegativeScores(formDataSerialized);

      setPositiveAndNegativeScores(positiveAndNegativeScores);

      setIsAssessmentDone(true);
    }, resultScreenTimeoutLength);
  };

  const assessmentRef = useRef(null);

  // Only run on first render
  useEffect(() => {
    const newSessionId = makeSessionId(16);
    setSessionId(newSessionId);

    attachAnswerButtonListeners(newSessionId);

    axios.get('https://heartspacerelweb.herokuapp.com/isAlive').then(resp => {
      if (resp && resp.status === 200) {
        console.log(200000);
        ga('send', 'event', 'Assessment', 'land', '');
      } else {
        ga('send', 'event', 'Assessment', 'networkFailure', '');
      }
    });
    
    // ga('send', 'event', 'Assessment', 'land', '');

    const cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: false,
        theme: 'dark',
        showProgressBar: true,
        preventAutoFocus: true,
        userInterfaceOptions: {
          robot: {
            robotResponseTime: 0,
            chainedResponseTime: CHAINED_RESPONSE_TIME,
          },
        },
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });

    assessmentRef.current.appendChild(cf.el);
  }, []);

  return (
    <div className={classes.container}>
      <div ref={assessmentRef} style={{ display: isAssessmentDone ? 'none' : 'inherit', transition: 'all .2s' }} />
      <ResultScreen
        sessionId={sessionId}
        positiveAndNegativeScores={positiveAndNegativeScores}
        style={{ display: isAssessmentDone ? 'flex' : 'none', transition: 'all .2s' }}
      />
    </div>
  );
};

export default RelationshipAssessment;
