import React from 'react';
import classes from './community.module.scss';
import Wave from 'react-wavify';
import Lottie from 'react-lottie';
import * as animationData1 from '../../assets/lottie/editor.json';
import * as animationData2 from '../../assets/lottie/sarah.json';

const Community = () => {
  const lottieOptionsTop = {
    loop: true,
    autoplay: true,
    animationData: animationData1.default,
  };

  const lottieOptionsSarah = {
    loop: true,
    autoplay: true,
    animationData: animationData2.default,
  };

  return (
    <section className={classes.container}>
      <Wave
        fill="#fde7db"
        paused={false}
        options={{ height: 20, amplitude: 20, speed: 0.3, points: 5 }}
      />
      <div className={classes.lottieContainer}>
        <Lottie
          options={lottieOptionsTop}
          height="40rem"
          isClickToPauseDisabled={true}
        />
      </div>
      <div className={classes.subContainer}>
        <h2 className={classes.title}>Community Story</h2>
        <div className={classes.storyContainer}>
          <div className={classes.lottieSarah}>
            <Lottie
              options={lottieOptionsSarah}
              height="20rem"
              width="20rem"
              isClickToPauseDisabled={true}
            />
          </div>
          <div className={classes.story}>
            <h3 className={classes.subTitle}>
              Changing my thoughts has changed my relationship
            </h3>
            <article className={classes.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              accusantium facilis saepe et expedita magni asperiores modi hic
              mollitia iusto enim nostrum quae facere laborum, placeat
              provident, nihil incidunt doloremque! Officiis consequuntur libero
              vitae mollitia? Sed quia, temporibus a consectetur ratione
              nesciunt, iure tempora atque incidunt debitis ad, neque fuga?
            </article>
            <p className={classes.storyUser}>Sarah from London, UK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
