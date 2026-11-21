import './css-files/Card.css';
import './css-files/NavBar.css';

function NavBar() {
  return (
    <header>
      <div className="card header">
        <p className="name">Anthony Millspaugh</p>
        <p className="location">Tacoma, WA</p>

        <nav className="navbar">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#technologies">Technologies</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;