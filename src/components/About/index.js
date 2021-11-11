// == Import npm
import React, { useEffect } from 'react';
import CV from 'src/assets/CV-Loic-Jouhans(portfolio).pdf';
import git from 'src/assets/img/git.png';
import html from 'src/assets/img/html.png';
import css from 'src/assets/img/css.png';
import js from 'src/assets/img/javascript.png';
import sql from 'src/assets/img/MySQL-Logo.png';
import php from 'src/assets/img/php.png';
import symfo from 'src/assets/img/Symfony.png';

// == Import
import './about.scss';

// == Composant
const About = () => {
  // Ci dessous, le useEffect va permettre
  // de changer le titre dans l'onglet en fonction
  // de la page ou on se trouve sur le site.
  useEffect(() => {
    document.title = 'Loïc Jouhans | About';
  });

  return (

    <div className="about">
      <main>
        <div className="text-about-me">
          After 9 years of career in the construction industry and more precisely
          in plumbing and heating, I decided to change profession
          and to launch myself in the adventure of web development
          being passionate about this universe.
          I followed a 6 months course at the O'clock school to learn the basics of development.
          Oh, and if you want to see my CV you can download it below.
        </div>
        <div className="skills">
          During my training, here are the different technologies I studied
        </div>
        <div className="icon">
          <img className="git" title="Git logo" src={git} alt="git logo" />
          <img className="html" title="HTML logo" src={html} alt="html logo" />
          <img className="css" title="CSS logo" src={css} alt="css logo" />
          <img className="js" title="Javascript logo" src={js} alt="javascript logo" />
          <img className="php" title="PHP logo" src={php} alt="php logo" />
          <img className="sql" title="My sql logo" src={sql} alt="My sql logo" />
          <img className="symfo" title="Symfony logo" src={symfo} alt="Symfony logo" />
        </div>
      </main>
      <a href={CV} download className="face-button">
        <div className="face-primary">
          <span className="icon fa fa-cloud" />
          Download my CV
        </div>
        <div className="face-secondary">
          <span className="icon fa fa-hdd-o" />
          Size: 46 Ko
        </div>
      </a>
    </div>
  );
};

// == Export
export default About;
