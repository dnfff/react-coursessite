import React from 'react'
import { Link } from 'react-router-dom'

import icin from "../../../img/icin.svg"

function Content() {
  return (
    <div>
        <div className='info'>
        <h2 className='head__info'>What you' learn</h2>
        <p className='head__infotxt'>Create beautiful webflow sites with flowbase. Clone for <br /> 
        free and get started building a site today</p>

        <div className='info__box'>
            <img src={icin} alt=''></img>
            <div className='info__boxrow'>
            <h2 className='about__text2'>Analyzing User Data</h2>
            <p className='about__textp2'>Who are you developing for? 
            How will they use your design? <br />Building user personas can answer these.</p>
            </div>
            <Link to="/started" className='info__btn'> 4.5 hours</Link>
        </div>

        <div className='info__box'>
            <img src={icin} alt=''></img>
            <div className='info__boxrow'>
            <h2 className='about__text2'>User Persona</h2>
            <p className='about__textp2'>Who are you developing for? 
            How will they use your design? <br />Building user personas can answer these.</p>
            </div>
            <Link to="/started" className='info__btn'> 4.5 hours</Link>
        </div>

        <div className='info__box'>
            <img src={icin} alt=''></img>
            <div className='info__boxrow'>
            <h2 className='about__text2'>Prototyping</h2>
            <p className='about__textp2'>Who are you developing for? 
            How will they use your design? <br />Building user personas can answer these.</p>
            </div>
            <Link to="/started" className='info__btn'> 4.5 hours</Link>
        </div>

        <div className='info__box'>
            <img src={icin} alt=''></img>
            <div className='info__boxrow'>
            <h2 className='about__text2'>Storyboarding</h2>
            <p className='about__textp2'>Who are you developing for? 
            How will they use your design? <br />Building user personas can answer these.</p>
            </div>
            <Link to="/started" className='info__btn'> 4.5 hours</Link>
        </div>

        </div>
    </div>
  )
}

export default Content