// == Import npm
import React, { useState } from 'react';
import data from 'src/assets/data';
import TvModal from 'src/components/TvModal';

// == Import
import './projects.scss';
import Television from '../Television';

// == Composant
const Projects = () => {
  // State de la modal
  const [isOpen, setOpen] = useState(true);

  // On stock le tableau data dans le state
  const [datas, setData] = useState(data);

  // Fonction qui gère l'ouverture de la modale lors du click sur une Television
  const handleClick = () => {
    setOpen(true);
  };

  console.log(datas)
  return (
    // le data.map est une boucle du tableau data.js
    <div className="projects">
      <TvModal isOpen={isOpen} setOpen={setOpen} />
      {/* on boucle sur le tableau data, à chaque itération on récup item,
          ( item est tout le contenu d'un seul objet du tableau data )
          et pour chaque item on génère un composant Television et on lui donne ses props */}
      {/* {...item} = "le spread operator" le fait de mettre ... consiste à déverser la totalité
          des propriétés de l'objet dans le composant (ici name, img, text etc) */}
      {/* La props key est demandée par React, pour que chaque composant Télévision soit unique,
          il faut donc lui donner un nombre ou une string unique */}
      {datas.map((item) => <Television {...item} key={item.name} handleClick={handleClick} />)}
    </div>
  );
};

// == Export
export default Projects;
