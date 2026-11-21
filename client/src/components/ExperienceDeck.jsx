import placeholder from '../assets/placeholder.png';
import './css-files/ExperienceDeck.css';
import './css-files/Card.css';

const ExperienceInfo = [
  {
    id: 1,
    image: placeholder,
    alt: 'placeholder',
    job_title: "None :(",
    company: "None yet! You could be the first though!",
    timeframe: "Never"
  }
];

function ExperienceDeck() {
  return (
    <>
      <h3>Experience</h3>
      {ExperienceInfo.map((row) => (
        <div className="experience" key={row.id}>
          <img src={row.image} alt={row.alt} />
          <div className="experience-info">
            <p className='title'>{row.job_title}</p>
            <p className='company'>{row.company}</p>
          </div>
          <p className='time'>{row.timeframe}</p>
        </div>
      ))}
    </>
  );
}

export default ExperienceDeck;