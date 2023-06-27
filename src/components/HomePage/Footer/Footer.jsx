import React from 'react'
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className='footer'>
        <div className='footer__menu'>
        {/* <Link to="/" className='footer__logo'>logo</Link> */}
            <ul>
            <li className='footer__black'>Help menu</li>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
            </ul>
        </div>
        
        </div>
    </footer>
  )
}

export default Footer