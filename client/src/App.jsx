import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import Button from './components/Button';

const copyEmail = () => {
  navigator.clipboard.writeText("ajmillspaugh3@gmail.com")
};
const openGitHub = () => {
  window.open('https://github.com/AnthonyJMillspaugh', '_blank', 'noopener,noreferrer');
}
const openLinkedIn = () => {
  window.open('https://linkedin.com/in/anthony-millspaugh-240043341', '_blank', 'noopener,noreferrer');
}

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <section className="about-section">
        <p className="location">Tacoma, WA</p>
        <p className="occupation">Student at Pacific Lutheran University studying Computer Science, with a minor in Business Administration</p>
        <p className='description'>
          I develop using Kotlin, Python, and JavaScript, working on multiplatform applications, software development, and webpages.
          My projects current projects range from small applications for external hardware to larger software applications/webapps
          designed to be easy to use and highly capable across multiple platforms. I focus on delivering clean applications with a
          combination of ease-of-use and functionality.
        </p>
        <footer className="footer">
          <Button onClick={copyEmail} children='Email' />
          <Button onClick={openGitHub} children='GitHub' />
          <Button onClick={openLinkedIn} children='LinkedIn' />
        </footer>
      </section>
      <div id="projects">
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
