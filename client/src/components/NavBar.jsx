import './css-files/Card.css';
import './css-files/NavBar.css';

function NavBar() {
  return (
    <header className="card header">
      <div className="name-location">
        <p className="name">Anthony Millspaugh</p>
        <p className="location">Tacoma, WA</p>
      </div>

      <nav className="navbar">
        <a className='word-link' href="#projects">Projects</a>
        <a className='word-link' href="#experience">Experience</a>
        <a className='word-link' href="#contact">Contact</a>
        <a className='word-link' href="#tech-stack">Technologies</a>
      </nav>
    </header>
  );
}

export default NavBar;