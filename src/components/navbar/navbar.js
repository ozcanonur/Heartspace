import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import classes from './navbar.module.scss';

const navs = [
  { title: 'Home', onClick: () => scrollTo('#home') },
  { title: 'Community', onClick: () => scrollTo('#community') },
  {
    title: 'Relationship Assessment',
    onClick: () => navigate('/relationshipAssessment'),
  },
  { title: 'About us', onClick: () => scrollTo('#aboutUs') },
  { title: 'Get in touch', onClick: () => scrollTo('#getInTouch') },
];

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNav {
        nodes {
          logo {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const logo = data.allContentfulNav.nodes[0].logo.file.url;

  return (
    <header>
      <nav>
        <div className={classes.logoContainer}>
          <img
            src={logo}
            alt="Happy Relationships Logo"
            className={classes.logoImg}
          />
          <div className={classes.logoText}>Happy Relationships</div>
        </div>
        <div className={classes.navsContainer}>
          <ul className={classes.navsList}>
            {navs.map(({ title, onClick }) => (
              <li key={title} className={classes.navItem}>
                <div role="navigation" onClick={onClick}>
                  {title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
