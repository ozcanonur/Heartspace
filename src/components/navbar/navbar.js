import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from '../../assets/img/happy_logo_circle small.png';
import classes from './navbar.module.scss';

const navs = [
  { title: 'Community', scrollElementId: '#community' },
  {
    title: 'Relationship Assessment',
    scrollElementId: '#relationshipAssessment',
  },
  { title: 'About us', scrollElementId: '#aboutUs' },
  { title: 'Get in touch', scrollElementId: '#getInTouch' },
];

const Navbar = () => {
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
        <div className={classes.links}>
          <ul>
            {navs.map(({ title, scrollElementId }) => (
              <li key={title}>
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
