import { useState } from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About/>
      </main>
    </div>
  )
}

export default App;
