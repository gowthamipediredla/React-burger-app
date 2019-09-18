import React,{Component} from 'react'
import Button from '../../../components/Burger/UI/Button/Button'
class Ordersummary extends Component{
    
    //this could be a fucntional component also, doesnt have to be class comp
    // componentWillUpdate(){
    //     console.log(this.props.ingredients)
    //     console.log('[OrderSummary.js] Component will Mount')
    // }
    
    render(){
        
        const ingredientSummary=Object.keys(this.props.ingredients).map(ikey=>
            {
            return (<li key={ikey}><span style={{textTransform:'capitalize'}}>{ikey}</span>:{this.props.ingredients[ikey]}</li>)
        })
      
        
        return(
    
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with follwing ingredients</p>
                <ul>
                {ingredientSummary} 
                </ul>
                <p>Your Burger cost:{this.props.totalprice}</p>
                <p> continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    
    
    
    
            </React.Fragment>
        )

       
    }

    
    
}
export default Ordersummary