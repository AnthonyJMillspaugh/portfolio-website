import './css-files/TechStack.css'

const stack = [
  { label: 'Frontend', items: "HTML, CSS, JavaScript, React + Vite" },
  { label: 'Backend', items: "Node.js + Express, MySql" },
  { label: 'Languages', items: "Java, Python, Kotlin, C++, SQL, JavaScript" },
  { label: 'Tools', items: "Git, Docker, Linux" },
]

function TechStack() {
  return (
    <div className='tech-grid'>
      <h3>Tech Stack</h3>
      {stack.map((row) => (
        <div className='tech-row' key={row.label}>
          <span className='tech-label'>{row.label}</span>
          <span className='tech-items'>{row.items}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;