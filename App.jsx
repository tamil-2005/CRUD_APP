import React from 'react'
import Navbar from './Components/Navbar'
import User from './Components/User'
import Dashboard from './Components/Dashboard'
import './App.css'

const App = () => {
  return (
    <>
    
    
      <Navbar/>

<div className="container">
  <User/>
  <Dashboard/>
</div>
    
    
    </>
  )
}

export default App