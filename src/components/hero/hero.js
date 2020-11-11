import React from 'react';
import classes from './hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo} />
      <div className={classes.subContainer}>
        <div className={classes.title}>Nourish your relationship.</div>
        <div className={classes.subTitle}>
          <div>Communicate better. Deeper connections.</div>
          <div>More intimacy</div>
        </div>
        <button className={classes.button}>Check out or community</button>
      </div>
    </div>
  );
};

export default Hero;
