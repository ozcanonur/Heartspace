import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import RelationshipAssessment from '../components/relationshipAssessment/quiz';

import classes from './relationshipAssessment.module.scss';

const Quiz = () => {
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
      <RelationshipAssessment />
      {/* <Footer /> */}
    </div>
  );
};

export default Quiz;
