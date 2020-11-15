import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import classes from './navbar.module.scss';

const navs = [
  { title: 'Home', scrollElementId: '#home' },
  { title: 'Community', scrollElementId: '#community' },
  {
    title: 'Relationship Assessment',
    scrollElementId: '#relationshipAssessment',
  },
  { title: 'About us', scrollElementId: '#aboutUs' },
  { title: 'Get in touch', scrollElementId: '#getInTouch' },
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
            {navs.map(({ title, scrollElementId }) => (
              <li key={title} className={classes.navItem}>
                <div
                  role="navigation"
                  onClick={() => scrollTo(scrollElementId)}
                >
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
