import React from 'react';
import Modal from 'react-modal';
import Markdown from 'markdown-to-jsx';

import classes from './modal.module.scss';
import privacyPolicy from './privacyPolicy';

const ContactModal = ({ modalOpen, setModalOpen }) => {
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
        <h2 className={classes.heading}>Happy Relationships' Privacy Policy</h2>
        <Markdown className={classes.markdown}>{privacyPolicy}</Markdown>
      </div>
    </Modal>
  );
};

export default ContactModal;
