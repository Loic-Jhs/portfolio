// == Import npm
import React from 'react';
import lineUp from 'src/assets/img/lineup-screen.png';
import noise from 'src/assets/noise-tv.gif';

// == Import
import './projects.scss';

// == Composant
const Projects = () => (

  <div className="projects">
    <div className="container">
      <div className="monitor">
        <div className="monitorscreen" style={{ backgroundImage: `url(${lineUp})` }} />
      </div>

    </div>
    <div className="container">
      <div className="monitor">
        <div className="monitorscreen" />
      </div>

    </div>
    <div className="container">
      <div className="monitor">
        <div className="monitorscreen" />
      </div>
    </div>
  </div>

);

// == Export
export default Projects;
