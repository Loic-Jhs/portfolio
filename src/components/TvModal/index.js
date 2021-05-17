// == Import npm
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// == Import
import './tvModal.scss';

// == Composant
const TvModal = ({isOpen, setOpen}) => {
  // ici on défini nos states
  const [email, setEmail] = useState('');

  // function qui appelle une autre fonction,
  // en l'occurence setOpen qui est à false (c'est l'état de base de la modale, elle est fermé)
  const handleClose = () => {
    setOpen(false);
  };

  // Le contenu de la modale est inclus dans la variable body
  const body = (
    <div className="modal-body" style={{ outline: 'none' }}>
      <h2 id="simple-modal-title">Project</h2>
      <button className="close-button display-3d" type="button" onClick={handleClose}>+</button>
    </div>
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

// == Export
export default TvModal;
