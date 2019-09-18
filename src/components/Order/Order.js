import React from 'react'
import classes from './Order.css';

const order =(props)=> {
    const ingredients=[];
    for(let ingredientName in props.ingredients)
    {
        ingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]})
    }
    const ingredientOutput=ingredients.map(ig=>{
        return <span style={{ 
            textTransform:'Capitalize',
          margin: '0px 8px ',// margin is giving space bw diff boxes
             display:'inline-block',
            border:'1px solid #ccc',
            padding:'5px'
    }}key={ig.name}>{ig.name}({ig.amount})</span>
    })

    
 return(
    <div className={classes.Order}>
    <p> ingredients: {ingredientOutput}</p>
    <p>Price:<strong>Rs:{props.price}</strong></p>
  
   
    
</div>
 )
        

};
export default order 
