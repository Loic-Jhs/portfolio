// == Import npm
import React from 'react';

import Home from 'src/components/Home';
import Footer from 'src/components/Layout/Footer';
import Header from 'src/components/Layout/Header';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <div className="header-container">
      <Header />
    </div>
    <div className="main-container">
      <Home />
    </div>
    <div className="footer-container">
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
