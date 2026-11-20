import NavBar from './components/NavBar';
import ProjectSlider from './components/ProjectSlider';
import Button from './components/Button';
import { DotPattern } from './components/dot-pattern';

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
    <DotPattern
      className="min-h-screen bg-black"
      color="rgba(20, 160, 165, 0.35)"
      glowColor="#e8833a"
      gap={24}
      size={2}
      glow={8}
      speed={5}
      radius={160}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-[100vh]"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #000 100%)' }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-[100vh] bottom-0 -z-[5] bg-black" />

      <div className="header">
        <NavBar />
      </div>
      <section className="about-section">
        <p className="location">Tacoma, WA</p>
        <p className="occupation">Student at Pacific Lutheran University studying Computer Science, with a minor in Business Administration</p>
        <p className='description'>
          I develop using Kotlin, Python, HTML/CSS/JavaScript, and Docker + MySQL, working on multiplatform applications, software development, and webpages.
          My current projects range from small applications for external hardware to larger software applications/webapps
          designed to be easy to use and highly capable across multiple platforms. I focus on delivering clean applications with a
          combination of easy-to-use features and functionality.
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
    </DotPattern>
  );
}

export default App;
