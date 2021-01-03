import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';

import { ConversationalForm } from 'conversational-form';
import { questions } from './quizQuestions';
import { parseQuestions, getFullScore, attachAnswerButtonListeners, makeRandomSessionId } from './helpers';
import axios from 'axios';

import Loading from '../../assets/svg/loading.js';

import classes from './quiz.module.scss';

const RelationshipAssessment = () => {
  const ref = useRef(null);

  const [isAssessmentDone, setIsAssessmentDone] = useState(false);
  const [scores, setScores] = useState({ negativeScores: 15, positiveScores: 20 });
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailPostSuccess, setIsEmailPostSuccess] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
    }, 2000);
  };

  const isFirstRun = useRef(true);

  // Conversational form object is tied to window object
  // Maybe add dispatcher like that
  useEffect(() => {
    if (isFirstRun.current) {
      const cf = ConversationalForm.startTheConversation({
        options: {
          submitCallback,
          preventAutoFocus: false,
          theme: 'dark',
          showProgressBar: true,

          userInterfaceOptions: {
            robot: {
              robotResponseTime: 0,
              chainedResponseTime: 750,
            },
          },
          // loadExternalStyleSheet: false
        },
        tags: formFields,
      });

      ref.current.appendChild(cf.el);

      isFirstRun.current = false;
    }
  }, [formFields]);

  const submitEmail = async () => {
    try {
      setLoading(true);

      const params = { sessionId, question: 'email', answer: inputValue };

      if (inputValue.trim().length === 0 || !inputValue.includes('@') || !inputValue.includes('.')) return;

      const res = await axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params);

      setLoading(false);

      if (res.status === 201 || res.status === 200) return openModal();

      setIsEmailPostSuccess(false);
    } catch (error) {
      console.error('Something went wrong with us.');
    }
  };

  const { negativeScores, positiveScores } = scores;

  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <>
      <div className={classes.container}>
        <div ref={ref} style={{ display: isAssessmentDone ? 'none' : 'inherit', transition: 'all .2s' }} />
        <div
          className={classes.resultContainer}
          style={{ display: isAssessmentDone ? 'flex' : 'none', transition: 'all .2s' }}
        >
          <div className={classes.resultTextsContainer}>
            <h1 className={classes.resultNumber}>Your relationship strength score is 50.</h1>

            <div className={classes.resultLongText}>
              <p>What does this mean?</p>
              <hr />
              <p>
                The questions in this assessment are based on a psychological research And thousands of couples have
                taken it since 2016 Compared to everyone else, your relationship strength score is higher than most
                couples.
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
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact us"
        ariaHideApp={false}
      >
        {loading ? (
          <Loading />
        ) : (
          <div className={classes.modalContainer}>
            {isEmailPostSuccess ? (
              <>
                <p>Congratulations for taking this important step in improving your relationship.</p>
                <p>We have received your email.</p>
                <p>It takes some time to analyse answers and produce a report.</p>
                <p>Stay tuned and check your inbox within the next 24 hours.</p>
              </>
            ) : (
              <p>Sorry, something went wrong. Please try again later.</p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default RelationshipAssessment;
