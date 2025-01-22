import './App.css'
import profile from'./assets/profile.png'
import furniture from './assets/furniturestore.png'
import omega from './assets/omega.png'
import best from './assets/Bestbefore.png'
import github from './assets/github.jpg'
import linked from './assets/linkedinlogo.png'
import frontend from './assets/Frontendlibraries.png'
import javascript from './assets/JSalgorithmsandDatastructures.png'
import htmlcss from './assets/ResponsiveWebDesign.png'

function App() {
  return (
    <>
      <header>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <div className='header-container'>
          <h1>Westley Howe</h1>
        </div>
      </header>
      <body>
        <div className="body-container">
          <div className='container'>
            <div className='projects-container'>
              <h2>Projects</h2>
              <div className='cards-container'>
                {/* Make the projects cards, when doing the mobile have one card 
                display with two arrows on the side. For windows, do the same thing,
                but make it 3 cards*/}
                <div className='card'>
                  
                </div>
              </div>
            </div>
            <div className='profile-container'>
              <img className='profile'></img>
              <h2>About Me</h2>
              <p className='about-me'>
                Greetings, my name is Westley Howe and I am a software developer with a passion for creating various projects
                and learning. I have experience with HTML, CSS, JavaScript, Node.js, React, TypeScript, Python, C++ and C#. I am always 
                looking to learn more and expand my knowledge. I am currently seeking to expand my skills as a 
                software developer and am open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <div className='footer-container'>
          <div className='container'>
            <ol className='contact'>
              <li>westleyhowe@hotmail.com</li>
              <li>(639)999-2720</li>
            </ol>
            <div className='clickable-items'>
              <a href='https://github.com/ShaderFax'><img src={github} className='logo github'></img></a>
              <a href='https://www.linkedin.com/in/westley-howe-229526232/'><img src={linked} className='logo linkedin'></img></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;