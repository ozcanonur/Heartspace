import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import RelationshipAssessment from '../components/relationshipAssessment/relationshipAssessment';
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Helmet title={siteTitle}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HH650H7WVM%22%3E" defer></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH650H7WVM');`}
        </script>
      </Helmet>
      <Navbar location={location} className={classes.navbar} style={{ position: 'inherit', height: 'none' }} />
      <RelationshipAssessment />
    </div>
  );
};

export default Quiz;
