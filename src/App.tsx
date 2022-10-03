import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import vector1 from './assets/Vector 1.svg';
import behance from './assets/behance.svg';
import instagram from './assets/instagram.svg';
import dribbble from './assets/dribbble.svg';
import vector2 from './assets/Vector 2.svg';
import arrow from './assets/arrow down.svg';

function App() {
  const arrowRef = useRef<any>();

  useEffect(() => {
    gsap.fromTo(arrowRef.current, { opacity: 0, height: 0, translateY: -15 },
      { opacity: 1, height: '100%', translateY: 0, duration: 3 })
  });


  return (
    <div className="App">
      <header className="App-header">
        <div id='main-container'>
          <div id="logo-container">
            <img src="https://raw.githubusercontent.com/RSinhoroto/digitalBusinessCard/master/images/logo.png" alt="My logo" />
          </div>
          <div id='description-box'>
            <h1>Hello, I'm Rafa!</h1>
            <p>Wannabe dancer with a love for science and technology and some programming knowledge on the side</p>
            <a href="https://github.com/RSinhoroto" target={'_blank'} rel="noreferrer">
              <button>My GitHub page</button>
            </a>
            <img ref={arrowRef} src={arrow} alt="" />
          </div>

          <div id='under-bar'>
            <img src={vector1} alt="Vector 1" />
            <a href="https://www.behance.net/rafasinhoroto" target="_blank" rel="noreferrer">
              <img src={behance} alt="Behance" />
            </a>
            <a href="https://instagram.com/rsinhoroto" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <img src={dribbble} alt="Dribbble" />
            <img src={vector2} alt="Vector 2" />
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
