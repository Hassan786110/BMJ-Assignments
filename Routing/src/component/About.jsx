import React from 'react'
import { Link } from "react-router-dom"
import "./component.css"

const About = () => {
  return (
    <nav>
      <h1>About</h1>
      <div>
        <Link to="/" className='nav_links'>Home</Link>
        <Link to="/Portfolio" className='nav_links'>Portfolio</Link>
        <Link to="/Contact" className='nav_link2'>Contact</Link>
      </div>
    </nav>
  )
}

export default About
