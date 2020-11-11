import React from 'react';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import CoolAnimation from '../components/coolAnimation/coolAnimation';

import './style.scss';

const Index = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#1C1B7E',
          height: '900px',
          width: '100vw',
          position: 'absolute',
          zIndex: -1,
        }}
      />
      <div
        style={{
          padding: '0 5rem',
          maxWidth: '1440px',
          margin: 'auto auto',
        }}
      >
        <Navbar />
        <Hero />
        <CoolAnimation />
        <CheckInstagram />
        <Community />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
