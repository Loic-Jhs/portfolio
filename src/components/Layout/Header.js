// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './layout.scss';

// == Composant
const Header = () => (
  <header>
    <nav className="navbar-container">
      <Link data-text="Accueil" className="display-3d" to="/">Accueil</Link>
      <Link data-text="Réalisations" className="display-3d" to="/projects">Réalisations</Link>
      <Link data-text="À Propos" className="display-3d" to="/about">À Propos</Link>
    </nav>
  </header>
);

// == Export
export default Header;
