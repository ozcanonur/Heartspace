import React from 'react';
import classes from './community.module.scss';
import happyCouple from '../../assets/img/redHair.jpeg';
import Wave from 'react-wavify';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/editor.json';

const Community = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <section className={classes.container}>
      <Wave
        fill="#f29f7d"
        paused={false}
        options={{ height: 20, amplitude: 20, speed: 0.3, points: 5 }}
      />
      <div className={classes.lottieContainer}>
        <Lottie
          options={defaultOptions}
          height="40rem"
          isClickToPauseDisabled={true}
        />
      </div>
      <div className={classes.subContainer}>
        <h2 className={classes.title}>Community Story</h2>
        <h3 className={classes.subTitle}>
          Changing my thoughts has changed my relationship
        </h3>
        <div className={classes.storyContainer}>
          <div className={classes.imgContainer}>
            <img src={happyCouple} alt="Happy Couple" className={classes.img} />
            <div className={classes.footerText}>Sarah from London, UK</div>
          </div>
          <article className={classes.storyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            accusantium facilis saepe et expedita magni asperiores modi hic
            mollitia iusto enim nostrum quae facere laborum, placeat provident,
            nihil incidunt doloremque! Officiis consequuntur libero vitae
            mollitia? Sed quia, temporibus a consectetur ratione nesciunt, iure
            tempora atque incidunt debitis ad, neque fuga?
          </article>
        </div>
      </div>
    </section>
  );
};

export default Community;
