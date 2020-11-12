import React from 'react';
import classes from './community.module.scss';
import happyCouple from '../../assets/img/redHair.jpeg';
import heart from '../../assets/img/heart.png';
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
    <div className={classes.container}>
      <Wave
        fill="#f29f7d"
        paused={false}
        options={{ height: 20, amplitude: 20, speed: 0.3, points: 5 }}
      />
      <Lottie
        style={{ position: 'absolute', bottom: '74%', left: '35%' }}
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
      <section className={classes.section}>
        <div className={classes.title}>Community Story</div>
        <div className={classes.subTitle}>
          Changing my thoughts has changed my relationship
        </div>
        <div className={classes.storyContainer}>
          <img src={happyCouple} alt="Happy Couple" className={classes.img} />
          <div className={classes.storyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            accusantium facilis saepe et expedita magni asperiores modi hic
            mollitia iusto enim nostrum quae facere laborum, placeat provident,
            nihil incidunt doloremque! Officiis consequuntur libero vitae
            mollitia? Sed quia, temporibus a consectetur ratione nesciunt, iure
            tempora atque incidunt debitis ad, neque fuga?
          </div>
        </div>
        <div className={classes.footerText}>Sarah from London, UK</div>
      </section>
    </div>
  );
};

export default Community;
