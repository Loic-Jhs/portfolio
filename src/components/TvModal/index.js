// == Import npm
import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import MyCarousel from 'src/components/Carousel';

// == Import
import './tvModal.scss';

// == Composant
const TvModal = ({
  isOpen,
  setOpen,
  name,
  about,
  techno,
  carouImg,
}) => {
  // function qui appelle une autre fonction,
  // en l'occurence setOpen qui est à false (c'est l'état de base de la modale, elle est fermé)
  const handleClose = () => {
    setOpen(false);
  };

  // Le contenu de la modale est inclus dans la variable body
  // On a un style={{ outline: 'none' }} ici car la modale était entouré
  // d'un carré blanc qui apparaissait aléatoirement
  // en le mettant ici le bug a été corrigé
  const body = (
    <div className="parent-tv-modal" style={{ height: '100%', outline: 'none' }}>
      <div className="tv-modal-body">
        <h2 id="simple-modal-title">{name}</h2>
        <p className="about-project">{about}</p>
        {/* la condition à la volée ci dessous stipule que
        si carouImg à partir de son index 0 n'est pas
        strictement égal à une chaine de carac vide
        alors on affiche pas le carousel dans les autres modales */}
        {carouImg[0] !== '' && <MyCarousel carouImg={carouImg} />}
        <p className="techno-project">{techno}</p>
        <button className="close-button display-3d" type="button" onClick={handleClose}>+</button>
      </div>
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
  techno: PropTypes.string.isRequired,
  carouImg: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

// == Export
export default TvModal;
