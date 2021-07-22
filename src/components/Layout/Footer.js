// == Import npm
import React, {/* useState */} from 'react';
// import MailModal from 'src/components/MailModal';

// J'ai commenté ce qui servait à la MailModal, j'ai décidé d'utiliser un mailto
// à la place, en tout cas pour l'instant.
// == Import
import './layout.scss';

// == Composant
const Footer = () => {
  // State
  // 1er arg : la variable du state
  // 2eme arg : la fonction qui va modifier cette variable
  // On declare notre state initial en param de useState
  // const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    // setOpen(true);
  };

  return (
    <footer>
      {/* <MailModal isOpen={isOpen} setOpen={setOpen} /> */}
      <div className="media">
        <a href="https://github.com/Loic-Jouhans" target="_blank" rel="noreferrer">
          <i className="fa fa-github fa-3x display-3d nav-icon" />
        </a>
        <a href="https://www.linkedin.com/in/loic-jouhans/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-3x display-3d nav-icon" />
        </a>
        <a href="https://twitter.com/Jhsl__" target="_blank" rel="noreferrer">
          <i className="fa fa-twitter fa-3x display-3d nav-icon" />
        </a>
        <div onClick={handleClick}>
          <a href="mailto:jouhans.loic@gmail.com">
            <i className="fas fa-envelope fa-3x display-3d nav-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// == Export
export default Footer;
