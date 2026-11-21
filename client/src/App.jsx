import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import Button from './components/Button';
import ExperienceDeck from './components/ExperienceDeck';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import './components/css-files/Card.css';
import './App.css';

const copyEmail = () => {
  navigator.clipboard.writeText("ajmillspaugh3@gmail.com")
};
function App() {
  return (
    <div>
      <div className="header">
        <NavBar />
      </div>
      <div className="card" id="about">
        <p className="occupation">Student @ <a href="https://www.plu.edu/" target="_blank" rel="noopener noreferrer">Pacific Lutheran University</a> studying Computer Science, with a minor in Business Administration</p>
        <p className='description'>
          I develop using Kotlin, Python, HTML/CSS/JavaScript, and Docker + MySQL, working on multiplatform applications, software development, and webpages.
          My current projects range from small applications for external hardware to larger software applications/webapps
          designed to be easy to use and highly capable across multiple platforms. I focus on delivering clean applications with a
          combination of easy-to-use features and functionality.
        </p>
        <footer className="footer">
            <Button onClick={copyEmail} children='Email'/>
            <a className='link' href='https://github.com/AnthonyJMillspaugh' target="_blank" rel="noopener noreferrer">Github</a>
            <a className='link' href='https://linkedin.com/in/anthony-millspaugh-240043341' target="_blank" rel="noopener noreferrer">LinkedIn </a>
        </footer>
      </div>
      <div id="projects">
        <ProjectSlider />
      </div>
      <div className='card' id="experience">
        <ExperienceDeck />
      </div>
      <div className='card' id="tech-stack">
        <TechStack />
      </div>
      <div className='card' id="contact">
        <Contact />
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
