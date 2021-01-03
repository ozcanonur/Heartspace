import React, { useState, useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';
import { questions } from './quizQuestions';
import { parseQuestions, getFullScore, attachAnswerButtonListeners, makeRandomSessionId } from './helpers';
import axios from 'axios';

import classes from './quiz.module.scss';

const RelationshipAssessment = () => {
  const ref = useRef(null);

  const [isAssessmentDone, setIsAssessmentDone] = useState(true);
  const [scores, setScores] = useState({ negativeScores: 15, positiveScores: 20 });
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState('');

  const inputOnChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
    const sessionId = `${secondsSinceEpoch.toString()}_${makeRandomSessionId(16)}`;
    setSessionId(sessionId);

    attachAnswerButtonListeners(sessionId);

    axios.get('https://heartspacerelweb.herokuapp.com/isAlive');
  }, []);

  const formFields = parseQuestions(questions);

  const submitCallback = async function () {
    const formDataSerialized = this.getFormData(true);

    this.addRobotChatResponse(
      `Well done. We are done.&&Reflecting back and regularly assessing your relationship is an important first step.&&Give us a moment while we analyse your answers&&...`
    );

    const { score, classification, scores } = getFullScore(formDataSerialized);

    setScores(scores);

    setTimeout(() => {
      this.addRobotChatResponse(
        `We have your relationship strength score.&&Your score is ${score}.&&What does this mean?&&The questions in this assessment are based on a psychological research and thousands of couples have taken it since 2016.`
      );

      let nextLineAdditionalText =
        classification === 'Lower than average'
          ? ' is almost as high as '
          : classification === 'Average'
          ? ' similar to '
          : classification === 'Higher than average'
          ? ' higher than '
          : '';

      this.addRobotChatResponse(
        `Compared to everyone else, your relationship score is${nextLineAdditionalText}most couples.`
      );

      if (classification === 'Lower than average') this.addRobotChatResponse(`Don't fret!`);

      nextLineAdditionalText = classification === 'Higher than average' ? 'even further ' : '';
      this.addRobotChatResponse(
        `That is great news.&&Because your relationship is very open to ${nextLineAdditionalText}improvement with the right approach.&&And taking this assessment was an important first step.&&Would you like a more in-depth analysis?`
      );

      setIsAssessmentDone(true);

      // Need to continue convo here somehow
    }, 500);
  };

  // Conversational form object is tied to window object
  // Maybe add dispatcher like that
  useEffect(() => {
    const cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: false,
        theme: 'dark',
        showProgressBar: true,

        userInterfaceOptions: {
          robot: {
            robotResponseTime: 0,
            chainedResponseTime: 0,
          },
        },
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);
  }, [formFields]);

  const submitEmail = () => {
    const params = { sessionId, question: 'email', answer: inputValue };
    axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params);
  };

  const { negativeScores, positiveScores } = scores;

  return (
    <div className={classes.container}>
      <div ref={ref} style={{ display: isAssessmentDone ? 'none' : 'inherit' }} />
      <div className={classes.resultContainer} style={{ display: isAssessmentDone ? 'flex' : 'none' }}>
        <div className={classes.resultTextsContainer}>
          <h1 className={classes.resultNumber}>Your relationship strength score is 50.</h1>

          <div className={classes.resultLongText}>
            <p>What does this mean?</p>
            <hr />
            <p>
              The questions in this assessment are based on a psychological research And thousands of couples have taken
              it since 2016 Compared to everyone else, your relationship strength score is higher than most couples.
            </p>
            <hr />
            <div className={classes.visualisationContainer}>
              <div className={classes.visualisation}>
                <div className={classes.visualisationTextContainer}>
                  <div className={classes.interactionTypeScore}>{`Negative: ${negativeScores}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {negativeScores < 20 ? 'Lower than average' : 'Higher than average'}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${negativeScores}%, white ${negativeScores}%, white 100%)`,
                  }}
                />
              </div>
              <div className={classes.visualisation}>
                <div className={classes.visualisationTextContainer}>
                  <div className={classes.interactionTypeScore}>{`Positive: ${positiveScores}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {positiveScores < 20 ? 'Lower than average' : 'Higher than average'}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${positiveScores}%, white ${positiveScores}%, white 100%)`,
                  }}
                />
              </div>
            </div>
            <hr />
            <p>
              That is great news. Because your relationship is very open to even further improvement with the right
              approach and taking this assessment was an important first step.
            </p>
            <hr />
            <p>Would you like a more in-depth analysis?</p>
          </div>
          <input className={classes.emailInput} value={inputValue} onChange={inputOnChange} />
          <div className={classes.buttonContainer}>
            <div className={classes.submitButton} onClick={submitEmail}>
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipAssessment;
