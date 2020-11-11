import React from 'react';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';

import './style.scss';

const Index = () => {
  return (
    <div>
      <div id="top-image" />
      <div id="main-container">
        <Navbar />
        <div id="main">
          <Hero />
          <CheckInstagram />
          <Community />
          <Cards />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
