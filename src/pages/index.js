import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/womanPhone3.json';

import '../normalize.scss';
import '../style.scss';
import classes from './index.module.scss';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIndex {
        siteTitle
      }
    }
  `);

  const siteTitle = data.contentfulIndex.siteTitle;

  return (
    <div>
      <Helmet title={siteTitle} />
      <Navbar />
      <div className={classes.heroBg}>
        <div className={classes.lottieContainer}>
          <Lottie
            options={lottieOptions}
            height="40rem"
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
      <main className={classes.main}>
        <Hero />
        <CheckInstagram />
        <Community />
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
