import React from 'react';
import classes from './checkInstagram.module.scss';
import post1 from '../../assets/img/post1.png';
import post2 from '../../assets/img/post2.png';
import post3 from '../../assets/img/post3.png';

const CheckInstagram = () => {
  return (
    <section id="community" className={classes.container}>
      <div className={classes.subContainer}>
        <h2 className={classes.titleContainer}>
          <p className={classes.title}>Check out our Instagram</p>
          <p className={classes.subTitle}>
            Lots of daily insights and fun, engaging advice
          </p>
        </h2>
        <div className={classes.instagramPostsContainer}>
          <img className={classes.instagramPost} src={post1} alt="post 1" />
          <img className={classes.instagramPost} src={post2} alt="post 2" />
          <img className={classes.instagramPost} src={post3} alt="post 3" />
        </div>
        <button className={classes.button}>Join our community</button>
        {/* <div className={classes.anchor} /> */}
      </div>
    </section>
  );
};

export default CheckInstagram;
