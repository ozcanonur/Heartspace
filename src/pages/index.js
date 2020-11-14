import React from 'react';
import { Helmet } from 'react-helmet';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import Lottie from 'react-lottie';
import * as animationData from '../assets/lottie/womanPhone2.json';

import '../normalize.scss';
import '../style.scss';
import classes from './index.module.scss';

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData.default,
};

const Index = () => {
  return (
    <div>
      <Helmet title="Happy Relationships" />
      <Navbar />
      <div className={classes.heroBg}>
        <div className={classes.lottieContainer}>
          <Lottie
            options={defaultOptions}
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
