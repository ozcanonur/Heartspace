import React from 'react';
import classes from './checkInstagram.module.scss';

const CheckInstagram = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Check out our Instagram page</div>
        <div className={classes.subTitle}>
          Lots of daily insight and fun, engaging advice
        </div>
      </div>
      <div className={classes.instagramPostsContainer}>
        <div className={classes.instagramPost} />
        <div className={classes.instagramPost} />
        <div className={classes.instagramPost} />
      </div>
      <button className={classes.button}>Join our community</button>
    </div>
  );
};

export default CheckInstagram;
