import React from 'react'
import { Link } from "react-router-dom"
import "./component.css"

const Contact = () => {
  return (
    <nav>
      <h1>Contact</h1>
      <div>
        <Link to="/" className='nav_links'>Home</Link>
        <Link to="/About" className='nav_links'>About</Link>
        <Link to="/Portfolio" className='nav_link2'>Portfolio</Link>
      </div>
    </nav>
  )
}

export default Contact
