import './App.css'

function App() {

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