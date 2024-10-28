function certificates() {


    return (
        <>
            <header>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <div className='header-container'>
                    <h1>Westley Howe</h1>
                    <div className='space-between'></div>
                    <button><a href="./App.tsx">Home</a></button>
                    <button><a href='./projects.tsx'>Projects</a></button>
                    <button><a href='./certificates.tsx'>Certificates</a></button>
                    {/* add a light/dark theme button here.*/}
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
                    <div className='space-between'></div>
                  </div>
                </div>
            </footer>
        </>
    )
}

export default certificates