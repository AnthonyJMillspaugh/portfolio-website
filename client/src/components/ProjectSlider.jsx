import Button from './Button';
import placeholder from '../assets/placeholder.png';
import COMAPCompass from '../assets/COMAP-Compass-Website.png';
import {useState} from "react";

const projects = [
  {
    id: 1,
    image: placeholder,
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
    title: 'Portfolio Website: Node.js and React',
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
    setCurrentIndex((prev) => prev === projects.length - 1 ? 0 : next + 1)
  };
  const currentSlide = projects[currentIndex];
  return (
    <>
      <div>
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        <Button onClick={prevSlide()} variant="slider" children='Previous Project'/>
        <Button onClick={nextSlide()} variant="slider" children='Next Project' />
      </div>
    </>
  )
}

export default ProjectSlider;