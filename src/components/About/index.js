// == Import npm
import React from 'react';
import CV from 'src/assets/loic-jouhans-CV.pdf';
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
const About = () => (
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
        <img className="git" src={git} alt="git logo" />
        <img className="html" src={html} alt="html logo" />
        <img className="css" src={css} alt="css logo" />
        <img className="js" src={js} alt="javascript logo" />
        <img className="php" src={php} alt="php logo" />
        <img className="symfo" src={symfo} alt="symfony logo" />
        <img className="sql" src={sql} alt="My sql logo" />
      </div>
    </main>
    <a href={CV} download className="face-button">
      <div className="face-primary">
        <span className="icon fa fa-cloud"></span>
        Download PDF
      </div>
      <div className="face-secondary">
        <span className="icon fa fa-hdd-o"></span>
        Size: 261 Ko
      </div>
    </a>
  </div>
);

// == Export
export default About;
