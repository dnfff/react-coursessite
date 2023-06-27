import React from 'react'
import { Link } from 'react-router-dom'

function Ready() {
  return (
    <div>
        <div className='ready'>
        <div className='ready__info'>
            <div className='ready__sale'>GET 30 DAYS MONEY BACK GUARANTEE</div>
            <div className='ready__head'>Ready to learn UX Design <br />
            from the expert?
            </div>
            <Link to="/started" className='header__button'>Get started</Link>
        </div>
        <div className='ovalready'></div>
        <div className='ovalready2'>
            <div className='ovalready3'></div>
        </div>
        
        </div>
    </div>
  )
}

export default Ready