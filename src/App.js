import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';


function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <nav className="navbar fixed-top bg-black navbar-dark navbar-expand-lg" >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                  <a className="nav-link" style={{color: "white"}} href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: "white"}} href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: "white"}} href="#Projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: "white"}} href="#Work-history">Work History</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="Home" className='home-section'>
          <Home /> 
        </section>
        <section id="About">
          <About /> 
        </section>
        <section id="Projects">
          <Projects /> 
        </section>
        <section id="Work-history">
          <Timeline /> 
        </section>
      </body>
    </div>
  );
}

export default App;
