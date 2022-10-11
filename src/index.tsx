import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './scenes/About/about';
import Work from './scenes/Work/Work';
import Skills from './scenes/Skills/Skills';
import Contact from './scenes/Contact/Contact';
import Hobbies from './scenes/Hobbies/Hobbies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div id='wrapper'>
      <App />
      <About />
      <Work />
      <Skills />
      <Hobbies />
      <Contact />
    </div>
  </React.StrictMode>
);

