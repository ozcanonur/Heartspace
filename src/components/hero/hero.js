import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/womanPhone2.json';
import classes from './hero.module.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
};

const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.subContainer}>
        <h1 className={classes.titleContainer}>
          <p className={classes.title}>Nourish your relationship.</p>
          <div className={classes.subTitle}>
            <p>Communicate better.</p>
            <p>Deeper connections.</p>
            <p>More intimacy.</p>
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
    </section>
  );
};

export default Hero;
