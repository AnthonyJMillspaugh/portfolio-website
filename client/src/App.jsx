import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import ExperienceDeck from './components/ExperienceDeck';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import WalkingFooter from "./components/WalkingFooter.jsx";
import './components/css-files/Card.css';
import './App.css';
import useReveal from './functions/useReveal.js';

const copyEmail = () => {
  navigator.clipboard.writeText("ajmillspaugh3@gmail.com")
};
function App() {
  useReveal();
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="header reveal card">
        <NavBar />
      </header>
      <div className="card reveal about">
        <p className="occupation">Student @ <a href="https://www.plu.edu/" target="_blank" rel="noopener noreferrer">Pacific Lutheran University</a> studying Computer Science, with a minor in Business Administration</p>
        <p className='description'>
          I develop using Kotlin, Python, HTML/CSS/JavaScript, and Docker + MySQL, working on multiplatform applications, software development, and webpages.
          My current projects range from small configuration applications for external hardware to larger software applications/webapps
          designed to be easy to use and highly capable across multiple platforms. I focus on delivering clean applications with a
          combination of easy-to-use features and functionality.
        </p>
        <footer className="about-footer">
            <a className='email' href='#' onClick={(e) => {
              e.preventDefault();
              copyEmail();
            }}>Email</a>
            <a className='link' href='https://github.com/AnthonyJMillspaugh' target="_blank" rel="noopener noreferrer">Github</a>
            <a className='link' href='https://linkedin.com/in/anthony-millspaugh-240043341' target="_blank" rel="noopener noreferrer">LinkedIn </a>
        </footer>
      </div>
      <div className='card reveal' id="projects">
        <ProjectSlider />
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
