import React, { useState } from 'react';
import axios from 'axios';

import Modal from './modal';

import { isValidEmail } from './helpers';

import classes from './relationshipAssessment.module.scss';

const ResultScreen = ({ sessionId, positiveAndNegativeScores, ...props }) => {
  const { positivesScore, negativesScore } = positiveAndNegativeScores;
  const positivesScorePercentile = Math.round((positivesScore / 24) * 100);
  const negativesScorePercentile = Math.round((negativesScore / 24) * 100);

  const ComparisonEnum = { lower: 1, average: 2, higher: 3 };

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

      if (res.status === 201 || res.status === 200) {
        gtag('event', 'assessment_email_submission_success', {
          'event_category': '',
          'event_label': ''
        });
        return openModal();
      } else {
        gtag('event', 'assessment_email_submission_failure', {
          'event_category': '',
          'event_label': 'network'
        });
      }

      setIsEmailPostSuccess(false);
    } catch (error) {
      console.error('Something went wrong with us.');
        gtag('event', 'assessment_email_submission_failure', {
          'event_category': '',
          'event_label': 'js-trycatch-block'
        });
    }
  };

  const getPositivesComparisonResult = (positivesScore) => {
    if (positivesScore <= 13) {
      return ComparisonEnum.lower;
    } else if (positivesScore >= 14 && positivesScore <= 20) {
      return ComparisonEnum.average;
    } else {
      return ComparisonEnum.higher;
    }
  };

  const getNegativesComparisonResult = (negativesScore) => {
    if (negativesScore <= 3) {
      return ComparisonEnum.higher;
    } else if (negativesScore >= 4 && negativesScore <= 7) {
      return ComparisonEnum.average;
    } else {
      return ComparisonEnum.lower;
    }
  };

  const getTotalComparisonResult = (positivesScore, negativesScore) => {
    let totalScore = positivesScore - negativesScore;
    if (totalScore <= 7) {
      return ComparisonEnum.lower;
    } else if (totalScore >= 7 && totalScore <= 16) {
      return ComparisonEnum.average;
    } else {
      return ComparisonEnum.higher;
    }
  };

  const getConclusiveComparisonStatement = (positivesScore, negativesScore) => {
    let comparisonResult = getTotalComparisonResult(positivesScore, negativesScore);
    switch (comparisonResult) {
      case ComparisonEnum.lower:
        return 'slightly lower than';
      case ComparisonEnum.average:
        return 'similar to';
      case ComparisonEnum.higher:
        return 'slightly higher than';
      default:
        break;
    }
  };

  const getPositivesComparisonStatement = (positivesScore) => {
    let comparisonResult = getPositivesComparisonResult(positivesScore);
    switch (comparisonResult) {
      case ComparisonEnum.lower:
        return 'Lower than average';
      case ComparisonEnum.average:
        return 'Similar to average';
      case ComparisonEnum.higher:
        return 'Higher than average';
      default:
        break;
    }
  };

  const getNegativesComparisonStatement = (negativesScore) => {
    let comparisonResult = getNegativesComparisonResult(negativesScore);
    switch (comparisonResult) {
      case ComparisonEnum.lower:
        return 'Lower than average';
      case ComparisonEnum.average:
        return 'Similar to average';
      case ComparisonEnum.higher:
        return 'Higher than average';
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.resultContainer} {...props}>
        <div className={classes.resultTextsContainer}>
          <h1 className={classes.resultNumber}>{`Your relationship strength score is: ${
            positivesScore - negativesScore
          }.`}</h1>
          <div className={classes.resultLongText}>
            <p>Hey, Kudos to you for choosing to be more aware and conscious in your relationship - and completing this assessment was a great step.</p>
            <hr />
            <p>
              So what does this score mean? The questions in this assessment are based on a psychological research. And thousands of couples have
              taken it since 2016. Compared to everyone else, your relationship strength score is{' '}
              {`${getConclusiveComparisonStatement(positivesScore, negativesScore)}`} most couples.
            </p>
            <hr />
            <div className={classes.visualisationContainer}>
              <div className={classes.visualisation}>
                <div className={classes.visualisationTextContainer}>
                  <div className={classes.interactionTypeScore}>{`Positive Aspects: ${positivesScorePercentile}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {`${getPositivesComparisonStatement(positivesScore)}`}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${positivesScorePercentile}%, white ${positivesScorePercentile}%, white 100%)`,
                  }}
                />
              </div>
              <div className={classes.visualisation}>
                <div className={classes.visualisationTextContainer}>
                  <div className={classes.interactionTypeScore}>{`Negative Aspects: ${negativesScorePercentile}%`}</div>
                  <div className={classes.interactionTypeCategory}>
                    {`${getNegativesComparisonStatement(negativesScore)}`}
                  </div>
                </div>
                <div
                  className={classes.visualisationLine}
                  style={{
                    background: `linear-gradient(to right, #f2a07e 0, #f2a07e ${negativesScorePercentile}%, white ${negativesScorePercentile}%, white 100%)`,
                  }}
                />
              </div>
            </div>
            <hr />
            <p>
              That is good news - there are aspects your relationship that can further improve for a more lasting, resilient bond. To access your full report and a more in-depth analysis of your answers, please enter your email address.
            </p>
            <hr />
            <p>Would you like a more in-depth analysis?</p>
            <p className={classes.spamNotice}>* Don’t worry, we hate spam as much as you do. We won’t annoy you and you can unsubscribe anytime.</p>
          </div>
          <input className={classes.emailInput} placeholder="Enter your email" value={inputValue} onChange={inputOnChange} required autocomplete="email"/>
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
