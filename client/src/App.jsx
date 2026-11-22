import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import ExperienceDeck from './components/ExperienceDeck';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import WalkingFooter from "./components/WalkingFooter.jsx";
import Button from './components/Button';
import './components/css-files/Card.css';
import './App.css';
import useReveal from './functions/useReveal.js';
import projects from './data/projectArray.js';
import {FiMail, FiGithub, FiLinkedin, FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import {useState} from "react";

const copyEmail = () => {
  navigator.clipboard.writeText("amillspaugh@plu.edu")
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1)
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === projects.length - 1 ? 0 : prev + 1)
  };
  const currentSlide = projects[currentIndex];

  useReveal();

  return (
    <div className="App">
      <header className="header reveal card">
        <NavBar />
      </header>
      <div className="card reveal about">
        <p className="occupation">Junior @ <a className='school-link' href="https://www.plu.edu/" target="_blank" rel="noopener noreferrer">Pacific Lutheran University</a> studying Computer Science, with a minor in Business Administration</p>
        <p className='description'>
          I develop using Kotlin, Python, HTML/CSS/JavaScript, and Docker + MySQL, working on multiplatform applications, software development, and webpages.
          My current projects range from small configuration applications for external hardware to larger software applications/webapps
          designed to be easy to use and highly capable across multiple platforms. I focus on delivering clean applications with a
          combination of easy-to-use features and functionality.
        </p>
        <footer className="about-footer">
            <a className='email-about' href='#' onClick={(e) => {
              e.preventDefault();
              copyEmail();
            }}>Email<FiMail /></a>
            <a className='link-about' href='https://github.com/AnthonyJMillspaugh' target="_blank" rel="noopener noreferrer">Github<FiGithub /></a>
            <a className='link-about' href='https://linkedin.com/in/anthony-millspaugh-240043341' target="_blank" rel="noopener noreferrer">LinkedIn<FiLinkedin /></a>
        </footer>
      </div>
      <div className='card reveal' id="projects">
        <ProjectSlider currentIndex={currentIndex} />
      </div>
      <div className='slider-buttons'>
        <Button className='button card reveal' onClick={prevSlide} children={FiArrowLeft()} />
        <Button className='button card reveal' onClick={nextSlide} children={FiArrowRight()} />
      </div>
      <div className='card reveal' id="experience">
        <ExperienceDeck />
      </div>
      <div className='card reveal' id="tech-stack">
        <TechStack />
      </div>
      <div className='card reveal' id="contact">
        <Contact />
      </div>
      <div className="footer card reveal">
        <p className="footer-name">Anthony Joseph Millspaugh</p>
        <p className="note">Not much to see here :P</p>
      </div>
      <footer>
        <WalkingFooter />
      </footer>
    </div>
  );
}

export default App;
