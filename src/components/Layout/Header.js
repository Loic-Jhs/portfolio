// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './layout.scss';

// == Composant
const Header = () => (
  <header>
    <nav className="navbar-container">
      <Link to="/">Accueil</Link>
      <Link to="/projects">Réalisations</Link>
      <Link to="/about">À Propos</Link>
    </nav>
  </header>
);

// == Export
export default Header;
