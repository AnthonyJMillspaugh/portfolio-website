import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="about">
        <p className="location">Tacoma, WA</p>
        <p className="occupation">Student at Pacific Lutheran University studying Computer Science, with a minor in Business Administration</p>
      </div>
    </>
  );
}

export default App;
