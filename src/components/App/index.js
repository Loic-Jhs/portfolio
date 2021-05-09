// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import noise from 'src/assets/noise-tv.gif';

import Home from 'src/components/Home';
import About from 'src/components/About';
import Projects from 'src/components/Projects';
import Footer from 'src/components/Layout/Footer';
import Header from 'src/components/Layout/Header';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app" style={{ backgroundImage: `url(${noise})` }}>
    <div className="header-container">
      <Header />
    </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
    <div className="footer-container">
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
