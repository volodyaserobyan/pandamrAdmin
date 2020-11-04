import React, { useState } from 'react'
import eyeImgOff from '../../assets/images/eye-off.png'
import eyeImgOn from '../../assets/images/eye-on.png'
import { Success } from '../../components/Modal'
import './SignIn.scss'

const SignIn = () => {
    const [isPassword, setIsPassword] = useState(true)
    return (
      <div className="form-wrapper">
        <form className="form-content">
          <div className="title-holder">
            <h1 className="title-h1-text">Login</h1>
          </div>
          <div className="SignIn-Wrap-Cont-Wrapper">
            <p className="SignIn-Wrap-Cont-Wrapper_error">Invalid email or password</p>
            <div className="inp-holder">
              <input
                placeholder="Enter your Email"
                type="mail"
                className="inp-v"/>
            </div>
            <div className="inp-holder">
              <input
                className="inp-v"
                placeholder="Enter your Password"
                type={`${isPassword ? 'password' : 'text'}`}/>
              <div onClick={() => setIsPassword(!isPassword)}>
                {isPassword ?
                  <img src={eyeImgOff} alt="" /> :
                  <img src={eyeImgOn} alt="" />}
              </div>
            </div>
            <div className="SignIn-Wrap-Cont-Wrapper-Remember">
              <div className="checkbox-holder">
                <label className="container">
                  <input type="checkbox"/>
                  <span>Remember me</span>
                </label>
              </div>
              <div className="forgot-pass-t">
                <p>forgot password ?</p>
              </div>
            </div>
            <div className="btn-holder">
              <button className="btn-v" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
        
        <div className="pmr-info-b">
          <p>Made with <img
            src="https://static.pandamr.com/fs/userFiles/main/media/icon-ionic-ios-heart.png?1602242531369"
            alt=""/> by PandaMR</p>
        </div>
      </div>
    )
};

export default SignIn
