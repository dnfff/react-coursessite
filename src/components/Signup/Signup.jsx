import React from 'react'

import "../Login/Login.css"

import { Link } from 'react-router-dom';

import star from "../../img/star.svg"

function Signup() {
  return (
    <div>
        <div className='loginbackground'>
            <div className="wrapper">
            <div className="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="sign-link">
                        <p>Already have an account? <Link to="/login" className="signIn-link">Sign In</Link></p>
                    </div>
                </form>
            </div>
            <div className="login__oval">
                <img className="star" src={ star } alt="" />
                <img className="star2" src={ star } alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup