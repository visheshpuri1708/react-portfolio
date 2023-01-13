import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import Particles from './components/container/Particles/Particles'
import Wrapper from './components/container/Wrapper/Wrapper'

const App = () => {
  return (
    <div>
      <Wrapper>
        <Particles id='tsparticles' />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Wrapper>
    </div>
  )
}

export default App
