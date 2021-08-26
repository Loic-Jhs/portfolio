// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import lineUp from 'src/assets/img/lineup-screen.png';
import backof from 'src/assets/imgLineUp/backof.png';
import resto from 'src/assets/imgLineUp/Capture.png';
import profile from 'src/assets/imgLineUp/profile.png';
import ticket from 'src/assets/imgLineUp/ticket.png';

// == Import
import './myCarousel.scss';

const slides = [
  {
    image: lineUp,
  },
  {
    image: backof,
  },
  {
    image: resto,
  },
  {
    image: profile,
  },
  {
    image: ticket,
  },
];

function useTilt() {
  const ref = React.useRef(null);
  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      />
    </div>
  );
}

// == Composant
const MyCarousel = () => {
  // On map sur CarouImg qui est un tableau d'images (string)
  // à chaque itération ça créer une balise qui retourne une valeur du tableau
  // Comme on a 5 images dans le tableaux img, ça nous créer 5 balises <img />
  // On procède ainsi car c'est ce qu'attend le caroussel
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // ancien carousel => carouImg.map((img) => <img src={img} key={img} alt="1" />); <=

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button type="button" onClick={() => dispatch({ type: 'PREV' })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button type="button" onClick={() => dispatch({ type: 'NEXT' })}>›</button>
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
