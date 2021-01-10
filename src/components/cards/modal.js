import React from 'react';
import Modal from 'react-modal';

import classes from './modal.module.scss';

const ContactModal = ({ modalOpen, setModalOpen }) => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/happy__relationships', '_blank');
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Contact us"
    >
      <div className={classes.modalContainer}>
        <h2 className={classes.heading}>Contact us</h2>
        <p className={classes.text}>
          You can contact us by emailing hello@findheartspace.com.
        </p>
        <p className={classes.text2}>
          Or you can directly message us on Instagram!
        </p>
        <button onClick={redirectToInstagram} className={classes.button}>
          Instagram
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
