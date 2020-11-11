import React from 'react';
import classes from './navbar.module.scss';

const Navbar = () => {
  const navs = [
    'Community',
    'Relationship Assessment',
    'About us',
    'Get in touch',
  ];

  return (
    <header>
      <nav>
        <div className={classes.logoContainer}>
          <div className={classes.logoImg} />
          <div className={classes.logoText}>Happy Relationships</div>
        </div>
        <div className={classes.links}>
          <ul>
            {navs.map((li) => (
              <li key={li}>
                <a href="#">{li}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
