import './css-files/ProjectSlider.css';
import projects from '../data/projectArray.js';

function ProjectSlider({
  currentIndex,
  ...props
}) {
  return (
    <section className="slider">
      <div>
        <h3>Projects</h3>
        <img
          className="project-img"
          src={projects[currentIndex].image}
          alt={`Project ${currentIndex + 1}`}
        />
        <h3>{projects[currentIndex].title}</h3>
        <p>{projects[currentIndex].summary}</p>
      </div>
    </section>
  )
}

export default ProjectSlider;