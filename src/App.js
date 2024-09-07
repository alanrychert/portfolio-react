import './App.css';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <nav class="navbar fixed-top bg-body-tertiary navbar-expand-lg">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#About">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="About">
          <About /> 
        </section>
      </body>
    </div>
  );
}

export default App;
