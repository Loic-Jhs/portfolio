import lineUp from 'src/assets/img/lineup-screen.png';
import jim from 'src/assets/img/giphy-jim.gif';
import backof from 'src/assets/imgLineUp/backof.png';
import resto from 'src/assets/imgLineUp/Capture.png';
import profile from 'src/assets/imgLineUp/profile.png';
import ticket from 'src/assets/imgLineUp/ticket.png';
import portfolio from 'src/assets/img/portfolio.png';

export default [
  {
    name: 'lineUp',
    img: lineUp,
    text: '',
    about: 'LineUp was our final project, developed by a team of 5 developers using the scrum method. It\'s a responsive site that aims to facilitate queue management for restaurant owners, by transforming their physical queue into a virtual queue using a ticket distribution system via the site',
    techno: 'Technologies : Symfony React Redux MySQL',
    carouImg: [lineUp, backof, resto, profile, ticket],
  },
  {
    name: 'my portfolio',
    img: portfolio,
    text: '',
    about: 'The project on which you are, is in my personal site which aims to share my creations as a young developer. This project was made with React and Sass.',
    techno: 'Technologies : React Sass, No Backend',
    carouImg: [''],
  },
  {
    name: 'next project',
    img: jim,
    text: 'next projects soon',
    about: 'Be patient, it\'s comming.',
    techno: 'Technologies : None for the moment',
    carouImg: [''],
  },
];
