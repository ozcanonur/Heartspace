import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import RelationshipAssessment from '../components/relationshipAssessment/quiz';

const Quiz = ({ location }) => {
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
      <Navbar location={location} />
      <RelationshipAssessment />
      {/* <Footer /> */}
    </div>
  );
};

export default Quiz;
