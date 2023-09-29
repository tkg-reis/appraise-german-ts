import { useState } from 'react'
import './App.css'
import { Router } from './router/Router'
import { Link } from 'react-router-dom'
// import SearchBar from './components/SearchBar'
// import SearchResult from './components/SearchResult'


function App() {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/question">Question</Link>
      <Router/>
    </>
  )
}

export default App
