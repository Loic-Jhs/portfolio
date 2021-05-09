// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './layout.scss';

// == Composant
const Header = () => (
  <header>
    <nav className="navbar-container">
      <Link data-text="Home" className="display-3d" to="/">Home</Link>
      <Link data-text="Projects" className="display-3d" to="/projects">Projects</Link>
      <Link data-text="About" className="display-3d" to="/about">About</Link>
    </nav>
  </header>
);

// == Export
export default Header;
