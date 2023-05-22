import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
const Button = (props) => {
    return <button onClick={(evt) => {
        props.onButtonClick('hello');
    }} className={styles.Button}
        style={{ ...props.style,backgroundColor: props.bgColor }}
    >{props.children}</button>
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    style: PropTypes.object
}
export default Button; 