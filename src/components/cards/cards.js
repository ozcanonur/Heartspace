import React from 'react';
import Lottie from 'react-lottie';
import * as animationData1 from '../../assets/consulting.json';
import * as animationData2 from '../../assets/meditate.json';
import * as animationData3 from '../../assets/discussion.json';
import classes from './cards.module.scss';

const Cards = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1.default,
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2.default,
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3.default,
  };

  return (
    <div className={classes.container}>
      <div className={classes.sectionContainer}>
        <Lottie
          options={defaultOptions1}
          width={400}
          isClickToPauseDisabled={true}
        />
        <div className={classes.card}>
          <div className={classes.cardTitle}>Relationship Strength Quiz</div>
          <div className={classes.cardText}>
            Psychology-based relationship assessment will help key areas you can
            improve in your relationship
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <Lottie
          options={defaultOptions2}
          width={400}
          isClickToPauseDisabled={true}
        />
        <div className={classes.card}>
          <div className={classes.cardTitle}>About us / Who are we?</div>
          <div className={classes.cardText}>
            We'd love to hear from you! Get in touch to Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Rerum numquam laboriosam
            voluptatem consequatur cupiditate voluptas! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Repellat, optio.
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <Lottie
          options={defaultOptions3}
          width={400}
          isClickToPauseDisabled={true}
        />
        <div className={classes.card}>
          <div className={classes.cardTitle}>Get in touch</div>
          <div className={classes.cardText}>
            We'd love to hear from you! Get in touch to Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Rerum numquam laboriosam
            voluptatem consequatur cupiditate voluptas! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Repellat, optio.
          </div>
          <button className={classes.button}>Check it out!</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
