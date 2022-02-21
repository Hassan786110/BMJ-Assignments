import React from 'react'
import { Link } from "react-router-dom"
import "./component.css"

const Home = () => {
  return ( 
    <nav>
      <h1>Home</h1>
      <div>
        <Link to="/About" className='nav_links'>About</Link>
        <Link to="/Portfolio" className='nav_links'>Portfolio</Link>
        <Link to="/Contact" className='nav_link2'>Contact</Link>
      </div>
    </nav>
  )
}

export default Home
