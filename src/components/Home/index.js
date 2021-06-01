// == Import npm
import React, { useEffect } from 'react';

// == Import
import './home.scss';

// == Composant
// Sur ce composant il n'ya pas de return
// car les parenthèses après la "=>" le remplace.
const Home = () => {
  // Ci dessous, le useEffect va permettre
  // de changer le titre dans l'onglet en fonction
  // de la page ou on se trouve sur le site.
  useEffect(() => {
    document.title = 'Loïc Jouhans | Home';
  }, []);

  return (
    <div className="home">
      <main>
        <div className="main-content">
          Hi everyone! My name is Loïc Jouhans and I am a junior backend web developer.
          Welcome to my personal website, I hope you'll like it !
        </div>
      </main>
    </div>
  );
};

// == Export
export default Home;
