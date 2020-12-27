import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import RelationshipAssessment from '../components/relationshipAssessment/quiz';
import classes from './relationshipAssessment.module.scss';

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
      <Helmet title={siteTitle}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HH650H7WVM%22%3E" defer></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH650H7WVM');`}
        </script>
      </Helmet>
      <Navbar location={location} className={classes.navbar} />
      <RelationshipAssessment />
    </div>
  );
};

export default Quiz;
