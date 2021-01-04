import React, { useState } from 'react';
import axios from 'axios';

import Modal from './modal';

import { isValidEmail } from './helpers';

import classes from './relationshipAssessment.module.scss';

const ResultScreen = ({ sessionId, positiveAndNegativeScores, ...props }) => {
  const { positivesScore, negativesScore } = positiveAndNegativeScores;

  const [inputValue, setInputValue] = useState('');
  const [isEmailPostSuccess, setIsEmailPostSuccess] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const inputOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitEmail = async () => {
    if (!isValidEmail(inputValue)) return;

    try {
      setLoading(true);

      const params = { sessionId, question: 'email', answer: inputValue };
      const res = await axios.post('https://heartspacerelweb.herokuapp.com/assessment/questionResponse', params);

      setLoading(false);

      if (res.status === 201 || res.status === 200) return openModal();

      setIsEmailPostSuccess(false);
    } catch (error) {
      console.error('Something went wrong with us.');
    }
  };

  return (
    <>
      <div className={classes.resultContainer} {...props}>
        <div className={classes.resultTextsContainer}>
          <h1 className={classes.resultNumber}>{`Your relationship strength score is: ${positivesScore - negativesScore}.%`}</h1>
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
                  <div className={classes.interactionTypeScore}>{`Negative: ${negativesScore}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {negativesScore < 20 ? 'Lower than average' : 'Higher than average'}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${negativesScore}%, white ${negativesScore}%, white 100%)`,
                  }}
                />
              </div>
              <div className={classes.visualisation}>
                <div className={classes.visualisationTextContainer}>
                  <div className={classes.interactionTypeScore}>{`Positive: ${positivesScore}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {positivesScore < 20 ? 'Lower than average' : 'Higher than average'}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${positivesScore}%, white ${positivesScore}%, white 100%)`,
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
      <Modal modalOpen={modalOpen} closeModal={closeModal} isEmailPostSuccess={isEmailPostSuccess} loading={loading} />
    </>
  );
};

export default ResultScreen;
