import React from 'react';
import Modal from 'react-modal';

import Loading from '../../assets/svg/loading.js';

import classes from './relationshipAssessment.module.scss';

const CustomModal = ({ modalOpen, closeModal, isEmailPostSuccess, loading }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={{
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
      }}
      contentLabel="Contact us"
      ariaHideApp={false}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.modalContainer}>
          {isEmailPostSuccess ? (
            <>
              <p>Congratulations for taking this important step in improving your relationship.</p>
              <p>We have received your email.</p>
              <p>It takes some time to analyse answers and produce a report.</p>
              <p>Stay tuned and check your inbox within the next 24 hours.</p>
            </>
          ) : (
            <p>Sorry, something went wrong. Please try again later.</p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
