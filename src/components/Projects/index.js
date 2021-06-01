// == Import npm
import React, { useState, useEffect } from 'react';
import data from 'src/assets/data';
import TvModal from 'src/components/TvModal';
import Television from '../Television';

// == Import
import './projects.scss';

// == Composant
const Projects = () => {
  // Ci dessous, le useEffect va permettre
  // de changer le titre dans l'onglet en fonction
  // de la page ou on se trouve sur le site.
  useEffect(() => {
    document.title = 'Loïc Jouhans | Projects';
  }, []);

  // State de la modal
  const [isOpen, setOpen] = useState(false);

  // On stock le tableau data dans le state
  const [datas] = useState(data);

  const [currentProject, setCurrentProject] = useState(datas[0]);

  // Fonction qui gère l'ouverture de la modale lors du click sur une Television
  const openModal = (identifier) => {
    // Avec find() on récupère l'item qui a le meme identifier. Ici l'identifier
    // est recuperé en argument de la fonction openModal() utilsée dans Television
    // lors du handleClick
    const clickedProject = datas.find((item) => item.name === identifier);

    // Ensuite on le stock dans le state, qui sont également injectés dans le composant TvModal
    setCurrentProject(clickedProject);

    // On peut maintenant ouvrir la modal
    setOpen(true);
  };

  return (
    // le data.map est une boucle du tableau data.js
    <div className="projects">
      <TvModal isOpen={isOpen} setOpen={setOpen} {...currentProject} />
      {/* on boucle sur le tableau data, à chaque itération on récup item,
          ( item est tout le contenu d'un seul objet du tableau data )
          et pour chaque item on génère un composant Television et on lui donne ses props */}
      {/* {...item} = "le spread operator" le fait de mettre ... consiste à déverser la totalité
          des propriétés de l'objet dans le composant (ici name, img, text etc) */}
      {/* La props key est demandée par React, pour que chaque composant Télévision soit unique,
          il faut donc lui donner un nombre ou une string unique */}
      {datas.map((item) => <Television {...item} key={item.name} openModal={openModal} />)}
    </div>
  );
};

// == Export
export default Projects;
