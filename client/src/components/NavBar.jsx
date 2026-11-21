import './css-files/NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="name-location">
        <p className="name">Anthony Joseph Millspaugh</p>
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