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