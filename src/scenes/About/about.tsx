import './About.css';
import Frame from '../../assets/Frame.svg';
import Chess from '../../assets/Chess.svg';
import Dots from '../../assets/Dots.svg';
import Picture from '../../assets/Picture.png';

function About() {

  return (
    <div id='about-page' className='snap-to'>
      <div id='about-container'>

        <div id='about-text'>
          <h6>ABOUT ME</h6>
          <h1>My personal experience</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste commodi illum necessitatibus aut repellat incidunt facilis vitae fuga voluptates dolore blanditiis aspernatur, error officia voluptatibus rerum est, iure labore? Asperiores.</p>
        </div>

        <div id='about-image'>
          <div id='frame-div'>
            <img src={Frame} alt="White frame" />
          </div>
          <div id='dots-div'>
            <img src={Dots} alt="Purple dots" />
          </div>
          <div id='chess-div'>
            <img src={Chess} alt="Chess board pattern" />
          </div>
          <div id='profile-picture'>
            <img src={Picture} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About