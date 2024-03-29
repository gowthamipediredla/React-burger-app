import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axis-orders'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionTypes from '../../store/actions/index'
import Spinner from '../../components/Burger/UI/Spinner/Spinner'
class Orders extends Component {
   

    componentDidMount(){
      this.props.onFetchOrders(this.props.token,this.props.userId)
       
    }
    render() {
        let orders=<Spinner/>
        if(!this.props.loading){
        orders=this.props.orders.map(order=>( <Order key={order.id}
               
               price={order.price} // adding +order.price makes it as number from string
               ingredients={order.ingredients}/>
        )   
            )
        }
        return (
            <div> {orders}  </div>
          
        )
        }
}

const mapStateToProps=(state)=>{
    return{
       orders:state.order.orders,
       loading:state.order.loading,
       token:state.authred.token,
       userId:state.authred.userId
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchOrders:(token,userId)=>dispatch(actionTypes.fetchOrders(token,userId))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))
