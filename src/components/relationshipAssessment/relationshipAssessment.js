import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ConversationalForm } from 'conversational-form';
import gtag from '../../gtag';

import ResultScreen from './resultScreen';
import { questions } from './assessmentQuestions';
import { parseQuestions, getPositiveAndNegativeScores, attachAnswerButtonListeners, makeSessionId } from './helpers';

import classes from './relationshipAssessment.module.scss';

const CHAINED_RESPONSE_TIME = 0;

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

      if (gtag) {
        gtag('event', 'assessment_completed', {
          event_category: '',
          event_label: '',
          non_interaction: true,
        });
      }
    }, resultScreenTimeoutLength);
  };

  const assessmentRef = useRef(null);

  // Only run on first render
  useEffect(() => {
    let isMounted = true;

    const newSessionId = makeSessionId(16);
    setSessionId(newSessionId);

    // attachAnswerButtonListeners(newSessionId);

    axios.get('https://heartspacerelweb.herokuapp.com/isAlive').then((resp) => {
      if (!resp || resp.status !== 200) {
        if (!gtag) return;
        gtag('event', 'assessment_isAlive_failure', {
          event_category: '',
          event_label: '',
          non_interaction: true,
        });
      }
    });

    const cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: false,
        theme: 'light',
        showProgressBar: true,
        preventAutoFocus: true,
        userInterfaceOptions: {
          robot: {
            robotResponseTime: 0,
            chainedResponseTime: CHAINED_RESPONSE_TIME,
          },
        },
        // scrollAcceleration: 0,
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });

    if (isMounted) assessmentRef.current.appendChild(cf.el);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.container}>
      <div ref={assessmentRef} style={{ display: isAssessmentDone ? 'none' : 'inherit', transition: 'all .2s' }} />
      {isAssessmentDone ? (
        <ResultScreen
          sessionId={sessionId}
          positiveAndNegativeScores={positiveAndNegativeScores}
          style={{ display: 'flex' }}
        />
      ) : null}
    </div>
  );
};

export default RelationshipAssessment;
