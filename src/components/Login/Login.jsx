import React, { useState } from 'react'

import star from "../../img/star.svg"

import "./Login.css"

import { Link } from 'react-router-dom';

function Login() {

  return (
    <div>
        <div className='loginbackground'>
            <div className="wrapper">
                <div className="form-wrapper sign-in">
                    <form action="" className='form__log'>
                        <h2>Login</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="sign-link">
                            <p>Don't have an account? 
                                <Link to="/signup" className="signUp-link">Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login__oval">
                <img className="star" src={ star } alt="" />
                <img className="star2" src={ star } alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login