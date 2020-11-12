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
      <Navbar />
      <main style={{ margin: '0 auto', maxWidth: '1440px' }}>
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
