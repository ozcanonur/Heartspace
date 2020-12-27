import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Cards from '../components/cards/cards';
import CheckInstagram from '../components/checkInstagram/checkInstagram';
import Community from '../components/community/community';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import IndexLottie from './indexLottie';

import '../normalize.scss';
import '../style.scss';
import classes from './index.module.scss';

const Index = ({ location }) => {
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
      <Helmet title={siteTitle}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HH650H7WVM%22%3E" defer></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH650H7WVM');`}
        </script>
      </Helmet>
      <Navbar location={location} />
      <div className={classes.heroBg}>
        <IndexLottie />
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
