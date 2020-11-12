import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/womanPhone2.json';
import classes from './hero.module.scss';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={classes.container}>
        <h1 className={classes.subContainer}>
          <div className={classes.title}>Nourish your relationship.</div>
          <div className={classes.subTitle}>
            <div>Communicate better.</div>
            <div>Deeper connections.</div>
            <div>More intimacy.</div>
          </div>
          <button className={classes.button}>Check out our community</button>
        </h1>
      </div>
      <Lottie
        style={{ position: 'absolute', bottom: '-10%', left: '35%' }}
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default Hero;
