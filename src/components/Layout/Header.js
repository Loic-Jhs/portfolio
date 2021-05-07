// == Import npm
import React from 'react';

// == Import
import './layout.scss';

// == Composant
const Header = () => (
  <header>
    <nav className="navbar-container">
      <a href="index.php">Accueil</a>
      <a href="projects.php">Réalisations</a>
      <a href="about.php">À Propos</a>
    </nav>
  </header>
);

// == Export
export default Header;
