import React from 'react'
const ordersummary =(props)=>{

    const ingredientSummary=Object.keys(props.ingredients).map(ikey=>
        {
        return (<li  key={ikey}><span style={{textTransform:'capitalize'}}>{ikey}</span>:{props.ingredients[ikey]}</li>)
    })
    return(

        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with follwing ingredients</p>
            <ul>
            {ingredientSummary} 
            </ul>
            <p> continue to checkout?</p>




        </React.Fragment>
    )
    
}
export default ordersummary