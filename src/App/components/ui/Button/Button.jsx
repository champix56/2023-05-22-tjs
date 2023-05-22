import React from 'react'
import styles from './Button.module.css'

const Button=(props)=>{
    return <button onClick={(evt)=>{
        props.onButtonClick('hello');
    }} className={styles.Button}>{props.children}</button>
}

export default Button; 