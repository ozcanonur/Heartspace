import React from 'react';
import { graphql, useStaticQuery, navigate, Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import classes from './navbar.module.scss';

const Navbar = ({ location }) => {
  const onHomePage = location.pathname === '/';

  const navs = [
    {
      title: 'Home',
      onClick: () => (onHomePage ? scrollTo('#home') : navigate('/')),
    },
    {
      title: 'Community',
      onClick: () => (onHomePage ? scrollTo('#community') : navigate('/')),
    },
    {
      title: 'Relationship Assessment',
      onClick: () => navigate('/relationshipAssessment'),
    },
    {
      title: 'About us',
      onClick: () => (onHomePage ? scrollTo('#aboutUs') : navigate('/')),
    },
    {
      title: 'Get in touch',
      onClick: () => (onHomePage ? scrollTo('#getInTouch') : navigate('/')),
    },
  ];

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
        <Link to="/">
          <div className={classes.logoContainer}>
            <img
              src={logo}
              alt="Happy Relationships Logo"
              className={classes.logoImg}
            />
            <div className={classes.logoText}>Happy Relationships</div>
          </div>
        </Link>
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
