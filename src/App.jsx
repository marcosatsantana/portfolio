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
import ScrollUp from './components/ScrollUp/ScrollUp'
import Portfolio from './components/Portfolio/Portfolio'
import { Analytics } from '@vercel/analytics/react';
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </QueryClientProvider>
  )
}

export default App;
