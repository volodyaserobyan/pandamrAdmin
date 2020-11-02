import React, { useState } from 'react'
import eyeImgOff from '../../assets/images/eye-off.png'
import eyeImgOn from '../../assets/images/eye-on.png'
import { Success } from '../../components/Modal'
import './SignIn.scss'

const SignIn = () => {
    const [isPassword, setIsPassword] = useState(true)
    return (
        <section className='SignIn'>
            {/* <div className='SignIn-Wrap'> */}
                <form className='SignIn-Wrap-Cont'>
                    <h1>Login</h1>
                    <div className='SignIn-Wrap-Cont-Wrapper'>
                        <p className='SignIn-Wrap-Cont-Wrapper_error'>Invalid email or password</p>
                        <input
                            placeholder='Enter your Email'
                            type='mail'
                            className='SignIn-Wrap-Cont-Wrapper-Mail' />
                        <div className='SignIn-Wrap-Cont-Wrapper_pass'>
                            <input
                                placeholder='Enter your Password'
                                type={`${isPassword ? 'password' : 'text'}`} />
                            <div onClick={() => setIsPassword(!isPassword)}>
                                {isPassword ?
                                    <img src={eyeImgOff} /> :
                                    <img src={eyeImgOn} />}
                            </div>
                        </div>
                        <div className='SignIn-Wrap-Cont-Wrapper-Remember'>
                            <label class="container">
                                <p>Remember me</p>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>forgot password ?</p>
                        </div>
                        <input className='submit' type='submit' value='LOGIN' />
                    </div>
                </form>
                <p>Made with <img
                    src="https://static.pandamr.com/fs/userFiles/main/media/icon-ionic-ios-heart.png?1602242531369"
                    alt="" /> by PandaMR</p>
            {/* </div> */}
        </section>
    )
}

export default SignIn