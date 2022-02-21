import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Portfolio from './component/Portfolio'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='*' element={<h1 style={{fontFamily: "sans-serif"}}>Page Not found 404</h1>} />
        </Routes>
    </>
  )
}

export default App
