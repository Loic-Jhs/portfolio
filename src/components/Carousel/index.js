// == Import npm
import React from 'react';
import { Carousel } from '3d-react-carousal';
import PropTypes from 'prop-types';

// == Import
import './myCarousel.scss';

// == Composant
const MyCarousel = ({ carouImg }) => {
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
