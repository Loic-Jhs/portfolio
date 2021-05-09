// == Import npm
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MailModal from 'src/components/MailModal';

// == Import
import './layout.scss';

// == Composant
const Footer = () => {
  // State
  // 1er arg : la variable du state
  // 2eme arg : la fonction qui va modifier cette variable
  // On declare notre state initial en param de useState
  const [isOpen, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(true)
  };

  return (
    <footer>
      <MailModal isOpen={isOpen} setOpen={setOpen} />
      <div className="media">
        <Link to="https://github.com/Loic-Jouhans">
          <i className="fa fa-github fa-3x display-3d nav-icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/loic-jouhans/">
          <i className="fab fa-linkedin fa-3x display-3d nav-icon" />
        </Link>
        <Link to="">
          <i className="fa fa-twitter fa-3x display-3d nav-icon" />
        </Link>
        <div onClick={handleClick}>
          <i className="fas fa-envelope fa-3x display-3d nav-icon"/>
        </div>
      </div>
    </footer>
  );
};

// == Export
export default Footer;
