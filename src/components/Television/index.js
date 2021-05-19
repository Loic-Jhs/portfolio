// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './television.scss';

// == Composant
const Television = ({ img, text, openModal, name }) => {
  const handleClick = () => {
    openModal(name);
  };

  return (
    <div className="container">
      <div className="monitor" onClick={handleClick}>
        <div className="monitorscreen" style={{ backgroundImage: `url(${img})` }}>
          <p className="preview-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

Television.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

// == Export
export default Television;
