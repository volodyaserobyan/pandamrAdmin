import React from 'react'
import successImg from '../../../assets/images/successimg.png'
import './Success.scss'

const Success = props => {
    return (
        <section className='Success'>
            <div className='Success-Cont'>
                <div>
                    <div>
                        <img src={successImg} />
                    </div>
                    <p>{props.value}</p>
                </div>
            </div>
        </section>
    )
}

export default Success