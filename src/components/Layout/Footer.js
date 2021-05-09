// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './layout.scss';

// == Composant
const Footer = () => (
  <footer>
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
      <i className="fas fa-envelope fa-3x display-3d nav-icon"/>
    </div>

  </footer>
);

// == Export
export default Footer;
