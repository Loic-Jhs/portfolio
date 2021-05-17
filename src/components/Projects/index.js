// == Import npm
import React, { useState } from 'react';
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
    <div className="projects">
      <Television img={lineUp} text="" />
      <Television img={jim} text="" />
      <Television img={jim} text="next projects soon" />
    </div>
  );
};

// == Export
export default Projects;
