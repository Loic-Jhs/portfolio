// == Import npm
import React from 'react';

// == Import
import './television.scss';

// == Composant
const Television = ({ img, text, openModal, name }) => {

  const handleClick = () => {
    openModal(event, name)
  }

  return (
    <div className="container">
      <div className="monitor" onClick={handleClick}>
        <div className="monitorscreen" style={{ backgroundImage: `url(${img})` }}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
// == Export
export default Television;
