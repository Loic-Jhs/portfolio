// == Import npm
import React, { useState } from 'react';
import data from 'src/assets/data';
import TvModal from 'src/components/TvModal';
import lineUp from 'src/assets/img/lineup-screen.png';
import jim from 'src/assets/img/giphy-jim.gif';

// == Import
import './projects.scss';
import Television from '../Television';

// == Composant
const Projects = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    // le data.map est une boucle du tableau data.js
    <div className="projects">
      {data.map((item) => <Television {...item} />)}
    </div>
  );
};

// == Export
export default Projects;
