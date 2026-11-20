import './css-files/Card.css';
import './css-files/NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="card">
        <p className="name">Anthony Millspaugh</p>

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