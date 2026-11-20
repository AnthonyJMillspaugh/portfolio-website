import Button from './Button';
import placeholder from '../assets/placeholder.png';
import COMAPCompass from '../assets/COMAP-Compass-Website.png';
import TaskSherpLogo from '../assets/TaskSherp-logo.svg';
import {useState} from "react";
import './css-files/Card.css';
import './css-files/ProjectSlider.css';

console.log(placeholder, COMAPCompass);

const projects = [
  {
    id: 1,
    image: TaskSherpLogo,
    title: 'Task Sherp: Kotlin Multiplatform',
    summary: 'This is placeholder text'
  },
  {
    id: 2,
    image: COMAPCompass,
    title: 'COMAP Compass: Database Search Engine',
    summary: 'This is placeholder text'
  },
  {
    id: 3,
    image: placeholder,
    title: 'Portfolio Website: React + Vite on Github Pages',
    summary: 'This is placeholder text'
  },
  {
    id: 4,
    image: placeholder,
    title: "Greenhouse Light Timer: Python",
    summary: 'This is placeholder text'
  }
];

function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1)
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === projects.length - 1 ? 0 : prev + 1)
  };
  const currentSlide = projects[currentIndex];
  return (
    <section className="card-grid">
      <div className="card">
        <img
          src={currentSlide.image}
          alt={`Project ${currentIndex + 1}`}
        />
        <h3>{currentSlide.title}</h3>
        <p>{currentSlide.summary}</p>
        <Button onClick={prevSlide} variant="slider" children='Previous Project'/>
        <Button onClick={nextSlide} variant="slider" children='Next Project' />
      </div>
    </section>
  )
}

export default ProjectSlider;