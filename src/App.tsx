import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import vectorH from './assets/Vector horizontal.svg';
import behance from './assets/behance.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';
import vectorV from './assets/Vector vertical.svg';
import arrow from './assets/arrow down.svg';

function App() {
  const arrowRef = useRef<any>();

  useEffect(() => {
    gsap.fromTo(arrowRef.current, { opacity: 0, height: 0, translateY: -15 },
      { opacity: 1, height: window.innerWidth > 700 ? '2rem' : '100%', translateY: 0, duration: 3 })
  });


  return (
    <div id='main-container' className='snap-to'>
      <div id="logo-container">
        <img src="https://raw.githubusercontent.com/RSinhoroto/digitalBusinessCard/master/images/logo.png" alt="My logo" />
      </div>

      <div id="side-bar">
        <img className="vector-image" src={vectorV} alt="Vector 1" />
        <a href="https://www.behance.net/rafasinhoroto" target="_blank" rel="noreferrer">
          <img src={behance} alt="Behance" />
        </a>
        <a href="https://instagram.com/rsinhoroto" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/RSinhoroto" target="_blank" rel='noreferrer'>
          <img src={github} alt="Github" />
        </a>
        <img className="vector-image" src={vectorV} alt="Vector 2" />
      </div>

      <div id='description-box'>
        <h1>Hello, I am <span id='name'>Rafa</span></h1>
        <p>Engineer of Control and Automation by Universidade de Brasília training as junior developer at Chap0lin Solutions</p>
        <a href="#about-page">
          <div>Discover me!</div>
        </a>
        <a href='#about-page'>
          <img id="arrow" ref={arrowRef} src={arrow} alt="" />
        </a>
      </div>

      <div id='navigation-bar'>
        <a href="#main-container" className="navigation-dot"></a>
        <a href="#about-page" className="navigation-dot"></a>
        <a href="#work-page" className="navigation-dot"></a>
        <a href="#skills-page" className="navigation-dot"></a>
        <a href="#hobbies-page" className="navigation-dot"></a>
        <a href="#contact-info-page" className="navigation-dot"></a>
      </div>

      <div id='under-bar'>
        <img src={vectorH} alt="Vector 1" className='vector-image' />
        <a href="https://www.behance.net/rafasinhoroto" target="_blank" rel="noreferrer">
          <img src={behance} alt="Behance" />
        </a>
        <a href="https://instagram.com/sinhorart" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <img src={github} alt="Github" />
        <img src={vectorH} alt="Vector 2" className='vector-image' />
      </div>
    </div>
  );
}

export default App;
