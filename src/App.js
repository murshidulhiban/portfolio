
import './App.css';
import Body from './Body';
import './MediaQuery.css'


function App(){ 
  function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
  }
  return(
  <>
    
      <header>
        <nav id="desktop-nav">
            <div className="logo">Murshidul Hibhan</div>
            <ul className="nav-links" >
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <nav id='hamburger-nav'>
          <div className="logo">Murshidul Hibhan</div>
          <div className='hamburger-menu'>
            <div className='hamburger-icon' onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='menu-links'> 
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Project</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          </div>
        </nav>
      </header>
   
    <Body />
    <footer >
      <nav >
          <div className="nav-links-container" >
              <ul className="nav-links foot" >
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </nav>
      <p>Copyright &#169; 2024 Murshidul Hiban. All Rights Reserved.</p>
    </footer>
  </>)
}

export default App;
