import React from 'react';
import classes from './hero.module.scss';

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
    </section>
  );
};

export default Hero;
