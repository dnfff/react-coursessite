import React, { Component } from 'react'

import Slider from "react-slick";

function Students() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breackpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breackpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }

        ]
      };

  return (
    <div>
    <div className='students'>
        <div className='students__header'>
            <h2 className='students__headertop'>What my students say</h2>
            <p className='students__headerbottom'>Create custom landing pages with Shades that convert <br />
            more visitors than any website—no coding required.</p>
        </div>
        {/* <div className='students__body'> */}
            <Slider {...settings} className='students__slider'>
            <div className='students__bodybox1'>
                <h4>“I waited to completely finish the course to rate it. <br />
                    This was my first approach to python, i am an <br />
                    excel and VBA user. The professor has an <br />
                    excellent way to explain it and a lot or order and <br />
                    organization. I really recommend it.”
                </h4>

                <div className='students__firstStudent'>
                    <div className='firstStudent__photo'></div>
                    <div className='firstStudent__text'>
                    <h4 className='firstStudent__name'>Henk Fourtuin</h4>
                    <p className='firstStudent__inf'>Fouder of Crips</p>
                    </div>
                </div>
            </div>
            <div className='students__bodybox1'>
                <h4>“I waited to completely finish the course to rate it. <br />
                    This was my first approach to python, i am an <br />
                    excel and VBA user. The professor has an <br />
                    excellent way to explain it and a lot or order and <br />
                    organization. I really recommend it.”
                </h4>

                <div className='students__firstStudent'>
                    <div className='firstStudent__photo'></div>
                    <div className='firstStudent__text'>
                    <h4 className='firstStudent__name'>Henk Fourtuin</h4>
                    <p className='firstStudent__inf'>Fouder of Crips</p>
                    </div>
                </div>
            </div>
            <div className='students__bodybox1'>
                <h4>“I waited to completely finish the course to rate it. <br />
                    This was my first approach to python, i am an <br />
                    excel and VBA user. The professor has an <br />
                    excellent way to explain it and a lot or order and <br />
                    organization. I really recommend it.”
                </h4>

                <div className='students__firstStudent'>
                    <div className='firstStudent__photo'></div>
                    <div className='firstStudent__text'>
                    <h4 className='firstStudent__name'>Henk Fourtuin</h4>
                    <p className='firstStudent__inf'>Fouder of Crips</p>
                    </div>
                </div>
            </div>
            <div className='students__bodybox1'>
                <h4>“I waited to completely finish the course to rate it. <br />
                    This was my first approach to python, i am an <br />
                    excel and VBA user. The professor has an <br />
                    excellent way to explain it and a lot or order and <br />
                    organization. I really recommend it.”
                </h4>

                <div className='students__firstStudent'>
                    <div className='firstStudent__photo'></div>
                    <div className='firstStudent__text'>
                    <h4 className='firstStudent__name'>Henk Fourtuin</h4>
                    <p className='firstStudent__inf'>Fouder of Crips</p>
                    </div>
                </div>
            </div>
          </Slider>
        </div>

        

    </div>
  )
}

export default Students