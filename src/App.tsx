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
        <div className='sliding-container'>
            <div className="sliding-image">
              <img src={profile}></img>
            </div>
            <div className="sliding-image">
              <img src={furniture}></img>
            </div>
            <div className="sliding-image">
              <img src={omega}></img>
            </div>
            <div className="sliding-image">
              <img src={best}></img>
            </div>
            <div className="sliding-image">
              <img src=''></img>
            </div>
        </div>
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            My name is Westley Howe and I am a Software Developer.
            I have experience with Web Development and Game Development
            and I am interested in starting my career in any field.
            I have experience with various languages with the main 
            focus being C# (Unity), JS, React, and HTML/CSS.
          </p>
        </div>
        <div className='ceritificates'>
          <img src={htmlcss}></img>
          <img src={javascript}></img>
          <img src={frontend}></img>
        </div>
      </body>
      <footer>
        <div className='footer-container'>
          <div className='container'>
            <ol className='contact'>
              <li>westleyhowe@hotmail.com</li>
              <li>(639)999-2720</li>
            </ol>
            <div className='space-between'></div>
            <div className='clickable-items'>
              <button className='github'><img src={github} className='logo'></img></button>
              <button className='linkedin'><img src={linked} className='logo'></img></button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;