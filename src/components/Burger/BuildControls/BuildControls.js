import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'}

]
const builtcontrols=(props)=>(
    <div className={classes.BuildControls}>
         <p>current price of your Burger:<strong>{props.price.toFixed(2)}</strong>.Rs</p>
        {    controls.map(ctrl=>(
             <BuildControl  
             key={ctrl.label} 
             label={ctrl.label}
             added={()=>props.ingredientsadded(ctrl.type)}
             removed={()=>props.ingredientsremoved(ctrl.type)}
             disabled={props.disabled[ctrl.type]}
             price={props.price}
             />
         ) )}
         <button className={classes.OrderButton} disabled={!props.purchasestate} onClick={props.ordered}>ORDER NOW</button>

    </div>

);

export default builtcontrols;