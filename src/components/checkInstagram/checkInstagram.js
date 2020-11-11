import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/meditate.json';
import classes from './checkInstagram.module.scss';
import post1 from '../../assets/post1.png';
import post2 from '../../assets/post2.png';
import post3 from '../../assets/post3.png';

const CheckInstagram = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>Check out our Instagram</div>
          <div className={classes.subTitle}>
            Lots of daily insights and fun, engaging advice
          </div>
        </div>
        <div className={classes.instagramPostsContainer}>
          <img className={classes.instagramPost} src={post1} alt="post 1" />
          <img className={classes.instagramPost} src={post2} alt="post 2" />
          <img className={classes.instagramPost} src={post3} alt="post 3" />
        </div>
        <button className={classes.button}>Join our community</button>
        <div className={classes.anchor} />
      </div>
      <Lottie
        style={{ marginTop: '-5rem' }}
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
    </>
  );
};

export default CheckInstagram;