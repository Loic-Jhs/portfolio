// == Import npm
import React from 'react';
import { Snackbar, Alert } from '@material-ui/core';
import PropTypes from 'prop-types';

// == Import
import './notification.scss';

// == Composant
const Notification = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="notif">
      <div className="sucess">
        <Snackbar open={isOpen} autoHideDuration={4} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your message has been sent !
          </Alert>
        </Snackbar>
      </div>

      <div className="error">
        <Snackbar open={isOpen} autoHideDuration={4} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Oops ! Something is wrong
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

Notification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

// == Export
export default Notification;
