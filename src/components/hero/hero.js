import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classes from './hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero {
        title
        subtitle1
        subtitle2
        subtitle3
      }
    }
  `);

  const { title, subtitle1, subtitle2, subtitle3 } = data.contentfulHero;

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  return (
    <section id="home" className={classes.container}>
      <div className={classes.subContainer}>
        <h1 className={classes.heading}>
          <p className={classes.headingTitle}>{title}</p>
          <div className={classes.headingSubTitle}>
            <p>{subtitle1}</p>
            <p>{subtitle2}</p>
            <p>{subtitle3}</p>
          </div>
          <button onClick={redirectToInstagram} className={classes.button}>
            Join our community
          </button>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
