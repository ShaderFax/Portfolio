import './App.css'

function App() {
  return (
    <>
      <header>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Westley Howe</title>
      </header>
      <body>
        {/* The title card of the page should have my name centered in the middle of 
        the page with a partical effect in the background where the particles spawn in
        at random points in the title card then disappear. When the mouse hovers over
        the particles, they should behave the same, but will expand into a bubble. 
        
        The first section of the body should contain an about me portion that will 
        contain a brief desctription of who I am and what my qualifications are. There
        should be cards that show what I have experience with.
        
        Below that there will be a section outlining some completed projects, of which you
        have not done cause you are a fucking moron who burns out and loses all hope for your
        future and are scared you are going to live as nothing more than a peasant who isn't 
        enough for anyone.*/}
        <div className="title-container">
          <h1 className="title">Westley Howe</h1>
        </div>
        <div className="about-container">

        </div>
        <div className='projects-container'>

        </div>
      </body>
      <footer>
        {/* Here there will be a contact section allowing someone to put their name, email and 
        purpose for contact. Also place buttons showing what platforms you use, I.E. LinkedIn and Github */}
        <div className='contact-container'>

        </div>
      </footer>
    </>
  )
}

export default App;