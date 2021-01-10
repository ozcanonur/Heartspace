import React, { useState } from 'react';

import ContactModal from './modal';
import classes from './footer.module.scss';
import Instagram from '../../assets/svg/instagram.inline.svg';

const Footer = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <footer className={classes.container}>
      <p className={classes.copyrightText}>
        &copy; 2021 Happy Relationships Inc.
      </p>
      <button onClick={openModal} className={classes.privacyButton}>
        Privacy Policy
      </button>
      <button onClick={openModal} className={classes.termsButton}>
        Terms
      </button>
      <button onClick={openModal} className={classes.cookieButton}>
        Cookies
      </button>
      <div className={classes.socialMediaContainer}>
        <Instagram onClick={redirectToInstagram} />
      </div>
      <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </footer>
  );
};

export default Footer;
