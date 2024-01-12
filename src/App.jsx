import { useState } from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App;
