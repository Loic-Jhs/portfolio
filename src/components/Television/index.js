// == Import npm
import React from 'react';

// == Import
import './television.scss';

// == Composant
const Television = ({img, text}) => (

  <div className="container">
    <div className="monitor">
      <div className="monitorscreen pjtsoon" style={{ backgroundImage: `url(${img})` }}>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

// == Export
export default Television;
