import { useState } from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </div>
  )
}

export default App;
