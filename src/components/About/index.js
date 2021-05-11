// == Import npm
import React from 'react';
import CV from 'src/assets/loic-jouhans-CV.pdf';

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
