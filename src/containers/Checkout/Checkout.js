import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import Checkoutsummary from '../../components/Order/Checkoutsummary/Checkoutsummary'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component{
    // componentWilMmount(){
    //     this.props.onInitPurchase();
    // }
   
    checkoutcontinue=()=>{
        this.props.history.replace('/checkout/contact-data');
        
       
    }

    checkoutcancelled=()=>{
       
        this.props.history.goBack();  
    }
    

    render(){
        let summary=<Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect=this.props.purchased?<Redirect to="/"/>:null;
            summary=(<div>  
                {purchasedRedirect}  
                <Checkoutsummary ingredients={this.props.ings} 
             checkoutcancelled={this.checkoutcancelled} 
             checkoutcontinue={this.checkoutcontinue}/>
             <Route path={this.props.match.path+'/contact-data'} component={ContactData}/>
            {/* here compoent should be snmall only, if not wont navigat */}
             {/* // this props will have hitory */}
                </div>)
        }
        return summary
    }

}

const mapStateToProps=state=>{
    return{
        ings:state.burgerred.ingredients,
        purchased:state.order.purchased
        //price:state.totalprice
    }
}

// const MapDispatchToProps=dispatch=>{// as willmount nd this creating prblm while ordering again after ordering first. going to / instead of showing orderform
//     return{
//        onInitPurchase:()=>dispatch(actions.purchaseInit()) 
//         //price:state.totalprice
//     }
// }

export default connect(mapStateToProps)(Checkout);