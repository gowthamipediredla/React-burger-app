import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../Burger/UI/Button/Button'
import classes from './Checkoutsummary.css'
const checkoutsummary=props=>{
    return(
<div className={classes.Checkoutsummary}>
        <h1>Hope your Burger tastes good</h1>  
        <div style={{width:'100px', align:'center'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
   <Button btnType="Success" clicked={props.checkoutcontinue}>Continue</Button>
   <Button btnType="Danger" clicked={props.checkoutcancelled}>Cancel</Button>      
        </div>
        )
}

export default checkoutsummary