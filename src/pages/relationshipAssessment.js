import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Helmet } from 'react-helmet';

import RelationshipAssessment from '../components/relationshipAssessment/relationshipAssessment';

const Quiz = ({ location }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overscrollBehavior: 'contain' }}>
      <Helmet title="Relationship Assessment">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HH650H7WVM%22%3E" defer></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH650H7WVM');`}
        </script>
      </Helmet>
      <Navbar location={location} style={{ position: 'inherit', height: 'none' }} />
      <RelationshipAssessment />
    </div>
  );
};

export default Quiz;
