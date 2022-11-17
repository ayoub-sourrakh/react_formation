import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/reacthookform">React Hook Form</Link>
      <Link to="/ajax">Ajax</Link>
      <Link to="/bitcoin">Bitcoin</Link>
      <Link to="/meteo">Météo</Link>
      <Link to="/blog" > Blog</Link>
    </div>
  )
}

export default Navbar