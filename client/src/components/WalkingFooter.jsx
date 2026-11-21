import sheet from '../assets/hiker-sheet.png';
import './css-files/WalkingFooter.css';

function WalkingFooter() {
  return (
    <footer className="walker-footer" aria-hidden="true">
      <div className="walker" style={{ backgroundImage: `url(${sheet})` }} />
    </footer>
  );
}

export default WalkingFooter;