import React, { useState } from 'react';

import PrivacyModal from './modalprivacy';
import TermsModal from './modalterms';
import CookiesModal from './modalcookies';
import classes from './footer.module.scss';
import Instagram from '../../assets/svg/instagram.inline.svg';

const Footer = () => {

  // instagram icon
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  // privacy modal
  const [modalPrivacyOpen, setModalPrivacyOpen] = useState(false);

  const openPrivacyModal = () => {
    setModalPrivacyOpen(true);
  };

  // terms modal
  const [modalTermsOpen, setModalTermsOpen] = useState(false);

  const openTermsModal = () => {
    setModalTermsOpen(true);
  };

  // cookies modal
  const [modalCookiesOpen, setModalCookiesOpen] = useState(false);

  const openCookiesModal = () => {
    setModalCookiesOpen(true);
  };

  return (
    <footer className={classes.container}>
      <p className={classes.copyrightText}>
        &copy; 2021 Happy Relationships Inc.
      </p>
      <button onClick={openPrivacyModal} className={classes.privacyButton}>
        Privacy Policy
      </button>
      <button onClick={openTermsModal} className={classes.termsButton}>
        Terms
      </button>
      <button onClick={openCookiesModal} className={classes.cookiesButton}>
        Cookies
      </button>
      <div className={classes.socialMediaContainer}>
        <Instagram onClick={redirectToInstagram} />
      </div>
      <PrivacyModal modalOpen={modalPrivacyOpen} setModalOpen={setModalPrivacyOpen} />
      <TermsModal modalOpen={modalTermsOpen} setModalOpen={setModalTermsOpen} />
      <CookiesModal modalOpen={modalCookiesOpen} setModalOpen={setModalCookiesOpen} />
    </footer>
  );
};

export default Footer;
