import React,{Component} from 'react'
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENTS_PRICE={
    salad:20,
    bacon:40,
    meat:50,
    cheese:15

}

class BurgerBuilder extends Component{


    state={
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0


        }
    ,
    totalprice:100,
    purchaseable:false,
    purchasing:false
    }
    purchasehandler=()=>{
        this.setState({
            purchasing:true
        })
    }
    updatePurchaseState=(ingredients)=>{//getting outdated ingredients, like showing ordernow disabled until 2 items added, so we can pass updatedingredients to this function
        // const ingredients={
        //     ...this.state.ingredients

        // }

        const sum=Object.keys(ingredients).map(ing=>{
            return ingredients[ing]}).reduce((arr,el)=>{return arr+el},0)
            this.setState({
                purchaseable:sum>0
        
            })
        

    }
   
    addIngredients=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients ={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const updatedPrice=this.state.totalprice+INGREDIENTS_PRICE[type];
        this.setState({
           totalprice:updatedPrice,
           ingredients:updatedIngredients 
        })
        this.updatePurchaseState(updatedIngredients);

    }
    removeIngredients=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount-1;
        if(updatedCount<0)
        return;
        const updatedIngredients ={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const updatedReducedPrice=this.state.totalprice-INGREDIENTS_PRICE[type];
        this.setState({
           totalprice:updatedReducedPrice,
           ingredients:updatedIngredients 
        })
        this.updatePurchaseState(updatedIngredients);

    }
    render(){
        const disabledinfo={
            ...this.state.ingredients
        }
        for (let key in disabledinfo)
        disabledinfo[key]=disabledinfo[key]<=0;
        return(
            <Auxilary>
                 <Modal show={this.state.purchasing}>
                     <OrderSummary ingredients={this.state.ingredients}/>
                 </Modal>
              <Burger ingredients={this.state.ingredients}/>
             
             
               <BuildControls ingredientsadded={this.addIngredients} ingredientsremoved={this.removeIngredients} disabled={disabledinfo}
               price={this.state.totalprice} purchasestate={this.state.purchaseable}
               ordered={this.purchasehandler}/>
            </Auxilary>
        );
    }
}
export default BurgerBuilder