import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate, Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import OutsideClickHandler from 'react-outside-click-handler';

import classes from './navbar.module.scss';

const Navbar = ({ location, className, ...props }) => {
  const onHomePage = location.pathname === '/';

  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className={className} {...props}>
      <nav>
        <Link to="/">
          <div className={classes.logoContainer}>
            <img src={logo} alt="Heartspace Logo" className={classes.logoImg} />
            <div className={classes.logoText} role="title">
              Heartspace
            </div>
          </div>
        </Link>
        <div className={classes.navsContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15.39 11"
            onClick={toggleDrawer}
            className={classes.drawer}
          >
            <defs>
              <style>{'.prefix__cls-1{fill:#3e3e3f;stroke:#000;stroke-miterlimit:10}'}</style>
            </defs>
            <g id="prefix__Layer_2">
              <g id="prefix__Layer_1-2">
                <path className="prefix__cls-1" d="M0 .5h15.39M0 5.5h15.39M0 10.5h15.39" />
              </g>
            </g>
          </svg>
          <ul className={classes.navsList}>
            {navs.map(({ title, onClick }) => (
              <li key={title} className={classes.navItem}>
                <div role="navigation" onClick={onClick}>
                  {title}
                </div>
              </li>
            ))}
          </ul>
          <OutsideClickHandler onOutsideClick={closeDrawer}>
            <div
              className={classes.drawerMenu}
              style={{ opacity: drawerOpen ? 1 : 0, display: drawerOpen ? 'inherit' : 'none' }}
            >
              {navs.map(({ title, onClick }) => (
                <div
                  key={title}
                  className={classes.drawerItem}
                  onClick={() => {
                    onClick();
                    setDrawerOpen(false);
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </OutsideClickHandler>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
