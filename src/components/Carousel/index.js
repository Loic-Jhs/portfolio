// == Import npm
import React from 'react';
import { Carousel } from '3d-react-carousal';
import PropTypes from 'prop-types';

// == Import
import './myCarousel.scss';

// == Composant
const MyCarousel = ({ carouImg }) => {
  // On map sur CarouImg qui est un tableau d'images (string)
  // à chaque itération ça créer une balise qui retourne une valeur du tableau
  // Comme on a 5 images dans le tableaux img, ça nous créer 5 balises <img />
  // On procède ainsi car c'est ce qu'attend le caroussel
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const slides = carouImg.map((img) => <img src={img} key={img} alt="1" />);

  return (
    <div className="carousel">
      <Carousel slides={slides} />
    </div>
  );
};

MyCarousel.propTypes = {
  carouImg: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

// == Export
export default MyCarousel;
