import React from 'react'

import photo from "../../../img/back3.png"

function Teacher() {
  return (
    <div>
        <div className='aboutTeach'>
        <div className='aboutTeach__info'>
            <h2>Hi, I am "", your course instructor.</h2>
            <p>Create beautiful webflow sites with flowbase. Clone for <br />
            free and get started building a site today.</p>
        </div>
        <div className='aboutTeach__photo'>
            <div className='abouTeach__box'>
            <img className="abouTeach__ph" src={photo} alt='Photo'></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Teacher