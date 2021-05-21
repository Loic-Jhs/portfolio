import lineUp from 'src/assets/img/lineup-screen.png';
import jim from 'src/assets/img/giphy-jim.gif';
import backof from 'src/assets/imgLineUp/backof.png';
import resto from 'src/assets/imgLineUp/Capture.png';
import profile from 'src/assets/imgLineUp/profile.png';
import ticket from 'src/assets/imgLineUp/ticket.png';

export default [
  {
    name: 'lineUp',
    img: lineUp,
    text: '',
    about: 'LineUp was our final project, developed by a team of 5 developers using the scrum method. It\'s a responsive site that aims to facilitate queue management for restaurant owners, by transforming their physical queue into a virtual queue using a ticket distribution system via the site',
    carouImg: [lineUp, backof, resto, profile, ticket],
  },
  {
    name: 'my portfolio',
    img: '',
    text: '',
    about: '',
    carouImg: [''],
  },
  {
    name: 'next project',
    img: jim,
    text: 'next projects soon',
    about: '',
    carouImg: [''],
  },
];
