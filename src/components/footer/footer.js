import React from 'react';
import classes from './footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.privacy}>Privacy Policy</div>
      <div className={classes.copyright}>
        Happy Relationships copyright vs vs.
      </div>
      <div className={classes.icon} />
    </div>
  );
};

export default Footer;
