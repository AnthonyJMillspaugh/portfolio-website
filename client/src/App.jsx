import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import Button from './components/Button';

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="about-section">
        <p className="location">Tacoma, WA</p>
        <p className="occupation">Student at Pacific Lutheran University studying Computer Science, with a minor in Business Administration</p>
      </div>
      <div id="projects">
        <!-- TODO: figure out why this is broken -->
        <ProjectSlider />
      </div>
      <div id="experience">

      </div>
      <div id="tech-stack">

      </div>
      <div id="contact">

      </div>
      <div className="footer">

      </div>
    </>
  );
}

export default App;
