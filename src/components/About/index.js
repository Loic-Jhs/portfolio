// == Import npm
import React from 'react';
import CV from 'src/assets/CV-LJ.png';

// == Import
import './about.scss';

// == Composant
const About = () => (
  <div className="about">
    <main>
      <div className="cv">
        <img src={CV} alt="My CV" />
      </div>
    </main>
  </div>
);

// == Export
export default About;
