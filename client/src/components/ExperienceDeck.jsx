import placeholder from '../assets/placeholder.png';
import './css-files/ExperienceDeck.css';
import './css-files/Card.css';

const ExperienceInfo = [
  {
    id: 1,
    image: placeholder,
    job_title: "None :(",
    company: "None yet! You could be the first though!",
    timeframe: "Never"
  }
];

function ExperienceDeck() {
  return (
    <>
      <div className="experience">
        <img src={ExperienceInfo[0].image} alt="placeholder" />
        <div className="experience-info">
          <p className='title'>{ExperienceInfo[0].job_title}</p>
          <p className='company'>{ExperienceInfo[0].company}</p>
        </div>
        <p className='time'>{ExperienceInfo[0].timeframe}</p>
      </div>
    </>
  );
}

export default ExperienceDeck;