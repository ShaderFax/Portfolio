import './App.css'
import { useState } from 'react';

function App() {

  const [theme, ChangeTheme] = useState(false);

  const lightDarkTheme = () => {
    
  }

  return (
    <>
      <header>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <div className='header-container'>
          <h1>Westley Howe</h1>
          <div className='space-between'></div>
          <button>Projects</button>
          <button>Certificates</button>
          {/* add a light/dark theme button here.*/}
        </div>
      </header>
      <body>
        <div className="about-container">
          <div className='sliding-container'>
            <div className='sliding-image'>
              
            </div>
          </div>
          <h2>About Me</h2>
          <p>
            My name is Westley Howe and I am a Software Developer.
            I have experience with Web Development and Game Development
            and I am interested in starting my career in any field.
            I have experience with various languages with the main 
            focus being C# (Unity), JS, React, and HTML/CSS.
          </p>
        </div>
      </body>
      <footer>
        <div className='footer-container'>
          <div className='container'>
            <ol className='contact'>
              <li><a>westleyhowe@hotmail.com</a></li>
              <li>(639)999-2720</li>
            </ol>
            <div className='space-between'></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;