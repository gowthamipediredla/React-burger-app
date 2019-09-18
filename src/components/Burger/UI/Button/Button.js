import React from 'react'
import classes from './Button.css'
const button =(props)=>(
    <button disabled={props.disabled} className={[classes.Button,classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {/* changing to string from array */}
    {props.children}</button>

)
export default button