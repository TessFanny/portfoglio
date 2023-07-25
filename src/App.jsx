import { useState } from 'react'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import About from './components/About'
function App() {

  return (
    <div className="App">
      <Sidenav />
      <Main />
      <About/>
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
