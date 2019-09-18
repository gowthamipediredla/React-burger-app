import React,{Component} from 'react'
import Auxilary from '../../hoc/Auxilary/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axis-orders';
import Spinner from '../../components/Burger/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
//import axios from 'axios'
class BurgerBuilder extends Component{
    state={  
    purchasing:false,
    loading:false,
    //error:false
    }

    componentDidMount=()=>{
        
       // console.log(this.props)
        // axios.get('https://react-my-burger81.firebaseio.com/ingredients.json').then(response=>{this.setState({
        //     ingredients:response.data
        // })}).catch(error=>{this.setState({
        //   error:true
        // })})
        this.props.onInitIngredients();
    }
    cancelPurchase=()=>{
        this.setState({
            purchasing:false
        })
    }
    purchasehandler=()=>{
        if(this.props.isAuthenticated){
        this.setState({
            purchasing:true
        });
    }
        else{
      
       this.props.history.push("/checkout")
        this.props.history.push('/auth')
        // this.props.onSetAuthRedirectPath('/checkout');
    }
    }
    continuePurchase=()=>{
       
       this.props.onInitPurchase(); 
        this.props.history.push('/checkout')
    }
    
    updatePurchaseState=(ingredients)=>{

        const sum=Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((arr,el)=>{return arr+el;},0);
            return sum>0

    }
   
    render(){
        const disabledInfo={
            ...this.props.ingrs
        }
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary=null
let burger=this.props.error?<div><p style={{textAlign:'center'}}>ingredients cant be loaded </p></div>:<div><Spinner/></div>
if(this.props.ingrs){
  //  console.log(this.props)
      burger=(<React.Fragment><Burger ingredients={this.props.ingrs}/>
             
            <BuildControls ingredientsadded={this.props.onIngredientsadded} ingredientsremoved={this.props.onIngredientsremoved} disabled={disabledInfo}
            price={this.props.price} purchasestate={this.updatePurchaseState(this.props.ingrs)}
            ordered={this.purchasehandler}
            isAuth={this.props.isAuthenticated}/>;
                      </React.Fragment>);
           orderSummary= <OrderSummary 
           ingredients={this.props.ingrs} 
           totalprice={this.props.price} 
           purchaseCancelled={this.cancelPurchase} 
           purchaseContinued={this.continuePurchase}/>}
    
        if(this.state.loading)
        orderSummary=<Spinner/>
        return(
            <Auxilary>
                 <Modal show={this.state.purchasing} modalclosed={this.cancelPurchase}>
                 {orderSummary} 
                 </Modal>
              {burger}
            </Auxilary>
        );
    }
}
const mapStateToProps=state=>{
    return{
        ingrs:state.burgerred.ingredients,
        price:state.burgerred.totalprice,
        error:state.burgerred.error,
        isAuthenticated:state.authred.token!==null
      
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onIngredientsadded:(ingName)=>dispatch(actions.addIngredient(ingName)) , 
        onIngredientsremoved:(ingName)=>dispatch(actions.removeIngredient(ingName)),
        onInitIngredients:()=>dispatch(actions.initIngredients()),
        onInitPurchase:()=>dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath:(path)=>dispatch(actions.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios))