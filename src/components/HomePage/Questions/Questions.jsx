import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import down from "../../../img/down.svg"

function Questions() {

  const [show, setShow] = useState(false) 
  const [show2, setShow2] = useState(false) 
  const [show3, setShow3] = useState(false) 
  const [show4, setShow4] = useState(false) 

  return (
    <div>
        <div className='asked'>
        <h2>Frequently asked questions</h2>
        <div className='asked__box'>
            <h4>Do you give money back guarantee?</h4>
            <button className='asked__btn' onClick={() => setShow(!show)}>
            <img src={down} alt="" ></img>
            </button>

            <CSSTransition in={ show } classNames="alert" timeout={300} unmountOnExit>
                <div className='child__text'>Create beautiful webflow sites with flowbase. Clone for <br />
                free and get started building a site today.</div>
            </CSSTransition>
        </div>

        <div className='asked__box'>
            <h4>Do you give money back guarantee?</h4>
            <button className='asked__btn' onClick={() => setShow2(!show2)}>
            <img src={down} alt="" ></img>
            </button>

            <CSSTransition in={ show2 } classNames="alert2" timeout={300} unmountOnExit>
                <div className='child__text'>Create beautiful webflow sites with flowbase. Clone for <br />
                free and get started building a site today.</div>
            </CSSTransition>
        </div>

        <div className='asked__box'>
            <h4>Do you give money back guarantee?</h4>
            <button className='asked__btn' onClick={() => setShow3(!show3)}>
            <img src={down} alt="" ></img>
            </button>

            <CSSTransition in={ show3 } classNames="alert3" timeout={300} unmountOnExit>
                <div className='child__text'>Create beautiful webflow sites with flowbase. Clone for <br />
                free and get started building a site today.</div>
            </CSSTransition>
        </div>

        <div className='asked__box'>
            <h4>Do you give money back guarantee?</h4>
            <button className='asked__btn' onClick={() => setShow4(!show4)}>
            <img src={down} alt=""></img>
            </button>

            <CSSTransition in={ show4 } classNames="alert4" timeout={300} unmountOnExit>
                <div className='child__text'>Create beautiful webflow sites with flowbase. Clone for <br />
                free and get started building a site today.</div>
            </CSSTransition>
        </div>
        </div>
    </div>
  )
}

export default Questions