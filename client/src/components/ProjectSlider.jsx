import './css-files/ProjectSlider.css';
import projects from '../data/projectArray.js';
import {FiExternalLink} from 'react-icons/fi';

function ProjectSlider({
  currentIndex,
  ...props
}) {
  return (
    <section className="slider">
      <div>
        <h3>Projects</h3>
        <div className='img-container' >
          <a href={projects[currentIndex].githubLink} target='_blank' rel='noopener noreferrer'><img
            className="project-img"
            src={projects[currentIndex].image}
            alt={`Project ${currentIndex + 1}`}
          /></a>
          <div className='overlay'>{FiExternalLink()}</div>
        </div>
        <h3 className='project-title'>{projects[currentIndex].title}</h3>
        <p>{projects[currentIndex].summary}</p>
      </div>
    </section>
  )
}

export default ProjectSlider;