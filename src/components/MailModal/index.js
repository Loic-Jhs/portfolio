// == Import npm
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
// == Import
import './mailModal.scss';

// == Composant
const MailModal = ({isOpen, setOpen}) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    else if (event.target.name === 'subject') {
      setSubject(event.target.value);
    }
    else if (event.target.name === 'message') {
      setMessage(event.target.value);
    }
  };

  const body = (
    <div className="modal-body">
      <h2 id="simple-modal-title">Formulaire de contact</h2>
      <TextField
        type="email"
        label="Votre e-mail"
        value={email}
        onChange={handleChange}
        name="email"
      />
      <TextField
        type="text"
        label="Objet"
        value={subject}
        onChange={handleChange}
        name="subject"
      />
      <TextField
        type="text"
        label="Votre message"
        value={message}
        onChange={handleChange}
        name="message"
        multiline
        rows={6}
      />
    </div>
  );

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

// == Export
export default MailModal;
