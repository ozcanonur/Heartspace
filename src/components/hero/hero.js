import React from 'react';
import classes from './hero.module.scss';

const Hero = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  return (
    <section id="home" className={classes.container}>
      <div className={classes.subContainer}>
        <h1 className={classes.heading}>
          <p className={classes.headingTitle}>Nourish your relationship.</p>
          <div className={classes.headingSubTitle}>
            <p>Communicate better.</p>
            <p>Create a deeper connection.</p>
            <p>Enjoy more intimacy.</p>
          </div>
          <button onClick={redirectToInstagram} className={classes.button}>
            Check out our community
          </button>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
