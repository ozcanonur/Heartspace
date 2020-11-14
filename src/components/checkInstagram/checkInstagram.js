import React from 'react';
import classes from './checkInstagram.module.scss';
import post1 from '../../assets/img/post1.png';
import post2 from '../../assets/img/post2.png';
import post3 from '../../assets/img/post3.png';

const CheckInstagram = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  const instagramPosts = [
    {
      src: post1,
      alt: 'Instagram post 1',
    },
    {
      src: post2,
      alt: 'Instagram post 2',
    },
    {
      src: post3,
      alt: 'Instagram post 3',
    },
  ];

  return (
    <section id="community" className={classes.container}>
      <div className={classes.subContainer}>
        <h2 className={classes.titleContainer}>
          <p className={classes.title}>Our Community</p>
          <p className={classes.subTitle}>
            We are a community of people who seek to improve their
            relationships. Join us. 👋🏽 What is your story?
          </p>
        </h2>
        <div className={classes.instagramPostsContainer}>
          {instagramPosts.map(({ src, alt }) => (
            <img
              key={alt}
              className={classes.instagramPost}
              src={src}
              alt={alt}
            />
          ))}
        </div>
        <button onClick={redirectToInstagram} className={classes.button}>
          Join our community
        </button>
      </div>
    </section>
  );
};

export default CheckInstagram;
