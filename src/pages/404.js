import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/img/happy_logo_circle small.png';
import classes from './notFound.module.scss';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <header>
        <nav>
          <Link to="/" className={classes.navLink}>
            <div className={classes.logoContainer}>
              <img
                src={logo}
                alt="Happy Relationships Logo"
                className={classes.logoImg}
              />
              <div className={classes.logoText}>Happy Relationships</div>
            </div>
          </Link>
        </nav>
      </header>
      <div className={classes.notFoundContainer}>
        <h1 className={classes.title}>Not Found</h1>
        <p className={classes.subTitle}>
          We think that this is not the page you are looking for.
        </p>
        <div className={classes.button}>
          <Link to="/">Take me home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
