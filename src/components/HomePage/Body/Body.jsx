import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import play from "../../../img/play.svg"


function Body() {

  const [show, setShow] = useState(false) 

  return (
    <div className='header__body'>
        <div className='header__childbox'>
            <div className="header__child">
                <div className='child__header'>Learn no-code <br />tools today.</div>
                <div className='child__text'>Create beautiful webflow sites with flowbase. Clone for <br />
                free and get started building a site today.</div>
                <Link to="/started" className='header__button2'>Get started</Link>
                <div className='child__text'>Join over <span>4,000+</span> students</div>
            </div>
        </div>
        <div className='video'>
            <button className='video__button'>
              <img onClick={() => setShow(!show)} className='video__play' src={play} alt=''></img>
            </button>

              <div className='sect_block'>
                <article className='sect_art'>
                <CSSTransition in={ show } classNames="alert" timeout={300} unmountOnExit>
                  <iframe className="video_tou" src="https://www.youtube.com/embed/Ps-0f0K6izM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </CSSTransition>
                </article>
              </div>
        </div>
        <div className="header__oval"></div>
        <div className='header__oval2'></div>
    </div>
  )
}

export default Body