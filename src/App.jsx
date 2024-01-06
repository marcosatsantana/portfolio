import { useState } from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills />
        <Services />
        <Qualification />
      </main>
    </div>
  )
}

export default App;
