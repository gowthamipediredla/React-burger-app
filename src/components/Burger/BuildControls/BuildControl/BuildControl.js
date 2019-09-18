import React from 'react'
import class1 from './BuildControl.css'

   // console.log(this.props.ingredients)
   // console.log('[Buildcontrol.js] Component will Mount')


const buildcontrol=(props)=>{
   // console.log(props)
    return(
     
       
        <div className={class1.BuildControl}>
          
            <div className={class1.Label}>{props.label}</div>
           
           <button className={class1.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
           <button className={class1.More} onClick={props.added}>More</button>
        </div>
    )

}
export default buildcontrol;