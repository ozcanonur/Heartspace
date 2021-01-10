import React, { useState } from 'react';

import PrivacyModal from './modalprivacy';
import classes from './footer.module.scss';
import Instagram from '../../assets/svg/instagram.inline.svg';

const Footer = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  const [modalPrivacyOpen, setModalPrivacyOpen] = useState(false);

  const openPrivacyModal = () => {
    setModalPrivacyOpen(true);
  };

  return (
    <footer className={classes.container}>
      <p className={classes.copyrightText}>
        &copy; 2021 Happy Relationships Inc.
      </p>
      <button onClick={openPrivacyModal} className={classes.privacyButton}>
        Privacy Policy
      </button>
      <button onClick={openPrivacyModal} className={classes.termsButton}>
        Terms
      </button>
      <button onClick={openPrivacyModal} className={classes.cookieButton}>
        Cookies
      </button>
      <div className={classes.socialMediaContainer}>
        <Instagram onClick={redirectToInstagram} />
      </div>
      <PrivacyModal modalOpen={modalPrivacyOpen} setModalOpen={setModalPrivacyOpen} />
    </footer>
  );
};

export default Footer;
