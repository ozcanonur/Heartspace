import React from 'react';
import { Helmet } from 'react-helmet';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';

import '../normalize.scss';
import '../style.scss';

const Index = () => {
  return (
    <div>
      <Helmet title="Happy Relationships" />
      <Navbar />
      <main className="main">
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
