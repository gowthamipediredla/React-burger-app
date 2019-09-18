import * as actionTypes from './actionTypes'
import axios from '../../axis-orders'
export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchaseBurgerFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
       
    }

}
export const purchaseBurger=(token,orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart());
         axios.post('/orders.json?auth='+token,orderData)// json is imp
        // id of newly created order
               .then(response=>{
              //console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name,orderData))
            //this.props.history.push('/');//history prop not there for contactdata. eithr we should use withRouter or give props of checkout to contactdata as given below
        })
        .catch(  (error) => {
           dispatch(purchaseBurgerFail(error))
                     })
       
    }
}

export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersStart=()=>{
    return{
        type:actionTypes.FETCH_ORDERS_START
    }
}
export const fetchOrderSuccess=(orders)=>{
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}

export const fetchOrderFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const fetchOrders=(token,userId)=>{
    return dispatch =>{
        dispatch(fetchOrdersStart())
        const queryParams='?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"'
        axios.get('/orders.json'+queryParams).then(
           
            res=>{
                const fetchedOrders=[];
               // console.log(res.data)// here orders is object 
                for(let key in res.data){
                    fetchedOrders.push(
                        {...res.data[key],
                    id:key})
                }

               dispatch(fetchOrderSuccess(fetchedOrders))
                }).catch(err=>{
                    dispatch(fetchOrderFail(err))
            })

    }
}