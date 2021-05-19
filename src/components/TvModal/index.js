// == Import npm
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import MyCarousel from 'src/components/Carousel';

// == Import
import './tvModal.scss';

// == Composant
const TvModal = ({ isOpen, setOpen, name, about }) => {
  // function qui appelle une autre fonction,
  // en l'occurence setOpen qui est à false (c'est l'état de base de la modale, elle est fermé)
  const handleClose = () => {
    setOpen(false);
  };

  // Le contenu de la modale est inclus dans la variable body
  const body = (
    <div className="tv-modal-body" style={{ outline: 'none' }}>
      <h2 id="simple-modal-title">{name}</h2>
      <MyCarousel />
      <p>{about}</p>
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

TvModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// == Export
export default TvModal;
