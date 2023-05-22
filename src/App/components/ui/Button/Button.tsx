import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'
interface I_ButtonProps{
    onButtonClick: Function
    style?:object
    bgColor?:string
    children:string|React.ReactNode|Array<React.ReactNode|string>
    type?:'button'|'reset'|'submit'
}

const Button:React.FC<I_ButtonProps> = (props) => {
    return <button type={props.type} onClick={(evt) => {
        props.onButtonClick();
    }} className={styles.Button}
        style={{ ...props.style,backgroundColor: props.bgColor }}
    >{props.children}</button>
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['button','reset','submit'])
}
Button.defaultProps={
    bgColor:'lime',
    type:'button'
}
export default Button; 