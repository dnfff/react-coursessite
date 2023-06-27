import React from 'react'

function Statistic() {
  return (
    <div>
        <div className='oval'></div>
        <div className='oval2'></div>
        <div className='oval3'></div>
        <div className='about'>
            <div className='about__header'>
                <div className='about__number1'>
                <h2 className='about__text'>12,201</h2>
                <p className='about__textp'>happy students</p>
                </div>

                <div className='about__number2'>
                <h2 className='about__text'>3,291</h2>
                <p className='about__textp'>lectures</p>
                </div>

                <div className='about__number3'>
                <h2 className='about__text'>1,291</h2>
                <p className='about__textp'>5 star reviews</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Statistic