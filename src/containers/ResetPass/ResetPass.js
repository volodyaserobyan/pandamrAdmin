import React from 'react'
import './ResetPass.scss'

const ResetPass = () => {

    return (
        <section className='ResetPass'>
            {/* <div className='ResetPass-Wrap'> */}
            <form className='ResetPass-Cont'>
                <h1>FORGOT YOUR PASSWORD</h1>
                <div className='ResetPass-Cont-Wrapper'>
                    {/* <p className='ResetPass-Cont-Wrapper_error'>Invalid email or password</p> */}
                    <input
                        placeholder='Enter new Password'
                        type='password'
                        className='ResetPass-Cont-Wrapper-Mail' />
                    <input
                        placeholder='Respeat Password'
                        type='password'
                        className='ResetPass-Cont-Wrapper-Mail' />
                    <input className='submit' type='submit' value='RESET' />
                </div>
            </form>
            <p>Made with <img
                src="https://static.pandamr.com/fs/userFiles/main/media/icon-ionic-ios-heart.png?1602242531369"
                alt="" /> by PandaMR</p>
            {/* </div> */}
        </section>
    )
}

export default ResetPass