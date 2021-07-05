// == Import npm
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

// == Import
import './mailModal.scss';

// == Composant
const MailModal = ({ isOpen, setOpen }) => {
  // ici on défini nos states
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // function qui appelle une autre fonction,
  // en l'occurence setOpen qui est à false (c'est l'état de base de la modale, elle est fermé)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // lorsqu'on soumet le formulaire, le message s'envoie à mon gmail
    // via EmailJS grâce à cette fonction
    emailjs.sendForm('portfolio-contact', 'template_e87wdqn', event.target, 'user_9GRKOe4VNQeroGaWXLgna')
      .then((response) => {
        console.log(response);
        setOpen(false);
        window.alert('Your message has been sent');
      }, (response) => {
        console.log(response);
        window.alert('Oops! Something went wrong');
      });
  };

  // React mets à jour nos composant grâce aux states
  // cette function exécute à chaque changement d'un input,
  // une des 3 conditions
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

  // Le contenu de la modale est inclus dans la variable body
  const body = (
    <form className="modal-body" style={{ outline: 'none' }} onSubmit={handleSubmit}>
      <h2 id="simple-modal-title">Contact form</h2>
      <button className="close-button display-3d" type="button" onClick={handleClose}>+</button>
      <TextField
        type="email"
        label="Your email"
        value={email}
        onChange={handleChange}
        name="email"
      />
      <TextField
        type="text"
        label="Subject"
        value={subject}
        onChange={handleChange}
        name="subject"
      />
      <TextField
        type="text"
        label="Your message"
        value={message}
        onChange={handleChange}
        name="message"
        multiline
        rows={6}
      />
      <button className="send display-3d" type="submit">Send</button>
    </form>
  );

  // on retourne la variable body pour afficher le contenu de la modale
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

MailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

// == Export
export default MailModal;
