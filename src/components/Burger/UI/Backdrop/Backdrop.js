import React from 'react'
import class1 from './Backdrop.css'

const backdrop =(props)=>(
    props.show?<div className={class1.BackDrop} onClick={props.clicked}></div>:null
    );


export default backdrop