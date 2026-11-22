import './css-files/ProjectSlider.css';
import projects from '../data/projectArray.js';
import {FiExternalLink} from 'react-icons/fi';
import {motion, AnimatePresence} from "motion/react";

const variants = {
  enter: (direction) => ({
    x: direction * -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction * 50,
    opacity: 0,
  }),
}


function ProjectSlider({
  currentIndex,
  direction,
  ...props
}) {
  return (
    <section className="slider">
      <div>
        <h3>Projects</h3>
        <div className="slide-frame">
          <AnimatePresence mode='wait' initial={false} custom={direction}>
            <motion.div key={currentIndex} variants={variants} initial='enter' animate='center' exit='exit' custom={direction}>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProjectSlider;