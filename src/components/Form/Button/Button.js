import React from 'react'
import classNames from 'classnames'
import './Button.scss'

const Button = props => {

    return (
        <button
            onClick={e => props.onClick(e)}
            style={props.style}
            className={classNames('button', props.className)}>{props.value}</button>
    )
}

export default Button