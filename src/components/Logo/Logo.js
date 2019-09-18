import React from 'react'
import class1 from './Logo.css'
import burgeerimage from '../../assets/images/burger-logo.png'
const logo=props=>(
    <div className={class1.Logo} style={{height:props.height}}>
        <img src={burgeerimage} alt="Burger App"/>
    </div>
)
export default logo