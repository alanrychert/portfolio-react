import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <nav class="navbar fixed-top bg-black navbar-dark navbar-expand-lg" >
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                  <a class="nav-link" style={{color: "white"}} href="#Home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{color: "white"}} href="#About">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{color: "white"}} href="#Projects">Projects</a>
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
      </body>
    </div>
  );
}

export default App;
