import React from 'react'
import successImg from '../../../assets/images/successimg.png'
import './Success.scss'

const Success = props => {
    return (
        <div className="status-b-holder">
            <div className="Success-Cont">
                <div>
                    <img src={successImg} />
                </div>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default Success
