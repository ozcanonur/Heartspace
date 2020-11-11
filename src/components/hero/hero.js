import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/womanPhone.json';
import classes from './hero.module.scss';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.title}>Nourish your relationship.</div>
          <div className={classes.subTitle}>
            <div>Communicate better.</div>
            <div>Deeper connections.</div>
            <div>More intimacy.</div>
          </div>
          <button className={classes.button}>Check out our community</button>
        </div>
      </div>
      <Lottie
        className={classes.lottie}
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
    </>
  );
};

export default Hero;
