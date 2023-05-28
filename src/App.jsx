import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Interests from './components/Interests'


function App() {
  return (
    <>
    <div className="app text-main bg-background max-w-xs rounded-lg xl:max-w-md 2xl:max-w-xl">
      <Header />
      <About />
      <Interests />
      </div>
    </>
  )
}

export default App
