import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import classes from './community.module.scss';
import Wave from 'react-wavify';
import Lottie from 'react-lottie';
import * as animationData2 from '../../assets/lottie/sarah.json';

const Community = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCommunityFeedback {
        title
        subtitle
        storyText {
          raw
        }
        userName
      }
    }
  `);

  const {
    title,
    subtitle,
    storyText: { raw: storyText },
    userName,
  } = data.contentfulCommunityFeedback;

  const lottieOptionsSarah = {
    loop: true,
    autoplay: true,
    animationData: animationData2.default,
  };

  const parsedStoryText = JSON.parse(storyText).content[0].content[0].value;

  return (
    <section className={classes.container}>
      <Wave
        fill="#fde7db"
        paused={false}
        options={{ height: 20, amplitude: 20, speed: 0.3, points: 5 }}
        style={{ height: '14rem' }}
      />
      <div className={classes.subContainer}>
        <h2 className={classes.heading}>{title}</h2>
        <div className={classes.storyContainer}>
          <div className={classes.lottieSarah}>
            <Lottie options={lottieOptionsSarah} height="20rem" width="40rem" isClickToPauseDisabled={true} />
            <h3 className={classes.storyTitle}>{subtitle}</h3>
          </div>
          <div className={classes.story}>
            <article className={classes.storyText}>{parsedStoryText}</article>
            <p className={classes.storyUserInfo}>{`- ${userName}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
