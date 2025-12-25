import React from 'react'
import './App.css'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
 

  return (
    <>
      <div className='bg-[#050414]'>
        <Navbar />
      <About />
      <Skill />
      <Experience/>
      <Education />
      <Project />
      {/* <Contact /> */}
      <Footer />
      </div>
    </>
  )
}

export default App
