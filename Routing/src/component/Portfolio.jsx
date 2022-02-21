import React from 'react'
import { Link } from "react-router-dom"
import "./component.css"

const Portfolio = () => {
  return (
    <nav>
      <h1>Portfolio</h1>
      <div>
        <Link to="/" className='nav_links'>Home</Link>
        <Link to="/About" className='nav_links'>About</Link>
        <Link to="/Contact" className='nav_link2'>Contact</Link>
      </div>
    </nav>
  )
}

export default Portfolio
