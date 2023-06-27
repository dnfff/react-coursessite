import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/" className='header__logo'>logo</Link>
        <p className='header__content'>Course topics</p>
        <p className='header__content'>What students say</p>
        <div className='header__signbut'>
          <Link to="/login" className='header__signin'>Sign in</Link>
          <Link to="/started" className='header__button'>Get started</Link>
        </div>
  </div>
  )
}

export default Header