import React,{Component} from 'react'
import classes from './ContactData.css'
import Button from '../../../components/Burger/UI/Button/Button'
import axios from '../../../axis-orders'
import Spinner from '../../../components/Burger/UI/Spinner/Spinner'
import Input from '../../../components/Burger/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
class ContactData extends Component{
    state={
        orderForms:{
    name:{

        elementType:'input',
        elementConfig:{
           type:'text',
           placeholder:'your Name'
        },
        value:'',
        validation:{
            required:true
        },
        valid:false,
        touched:false

        },
 street:{
    elementType:'input',
    elementConfig:{
       type:'text',
       placeholder:'your Street'
        },
        value:'',
        validation:{
            required:true
        },
        valid:false,
        touched:false
    
    },
   code:{
    elementType:'input',
    elementConfig:{
       type:'text',
       placeholder:'your Zipcode'
        },
    value:''

    ,
    validation:{
        required:true,
        minlength:5,
        maxlen:15
    },
    valid:false,
    touched:false
},
  country:{
    elementType:'input',
    elementConfig:{
       type:'text',
       placeholder:'your Country'
        },
    value:'',
    validation:{
        required:true,
        minlength:5,
        maxlen:15
    },
    valid:false,
    touched:false

},            
mail:{
    elementType:'input',
    elementConfig:{
       type:'email',
       placeholder:'your mail'
        },
    value:'',
    validation:{
        required:true,
      
    },
    valid:false,
    touched:false
},      
deliveryMethod:{
    elementType:'select',
    elementConfig:{
      options:[{value:'fastest', displayValue:'Fastest'},
      {value:'Cheapest', displayValue:'Cheapest'}
    ]
      
                   },
        value:'fastest',
        validation:{}
          
        ,
        valid:true //adding valid in fropdown just to make formIsValid as true, if not showing undefined
    }

}
        ,
        
        formIsValid:false
    }

    checkValidity(value,rules){ // here rules gets validation:{}
        let isValid=true; //for all if to combinly work , put isvalid -=true and use &&

        
        if (!rules) {
            return true;
        }

        if(rules.required){
            isValid=value.trim()!==''&& isValid
        }

        if(rules.minlength){
            isValid=value.length>=rules.minlength && isValid
        }

       
        if(rules.maxlen){
            isValid=value.length<=rules.maxlen&&isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        

        return isValid;
    }

    inputChangeHandler=(event,InputIdentifier)=>{ //we should mutate immutably instead of using this.value, use setstate() video 26-->3:50
        const UpdatedOrderForm={...this.state.orderForms}
        const UpdatedFormELement={...UpdatedOrderForm[InputIdentifier]}
       
//cloning deeply to change values

UpdatedFormELement.value=event.target.value;
UpdatedFormELement.valid=this.checkValidity(UpdatedFormELement.value,UpdatedFormELement.validation);
UpdatedFormELement.touched=true
//console.log(UpdatedFormELement)
let formIsValid=true;
UpdatedOrderForm[InputIdentifier]=UpdatedFormELement;
for(let eachItem in UpdatedOrderForm){
    formIsValid=UpdatedOrderForm[eachItem].valid && formIsValid;
    
}

//console.log(formIsValid)
this.setState({
    orderForms:UpdatedOrderForm,
    formIsValid:formIsValid
})

    }

    orderHandler=(event)=>{
        event.preventDefault();
       
        const formData={};
        for(let formingredient in this.state.orderForms)
        {
            formData[formingredient]=this.state.orderForms[formingredient].value;//name:'gow'
        }
       // console.log('ingredients')
       // console.log(this.props.ingredients)// this ingrediebts from chekout dnt print until ingredients are declared in state here
         //alert("you purchasing a burger")
        
        const order={
            ingredients:this.props.ings,
            price:this.props.price,
        orderData:formData,
        userId:this.props.userId}
           
       this.props.onOrderBurger(this.props.token,order)
      //  console.log(this.state)
    }

    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForms)
        {
            formElementsArray.push({id:key,config:this.state.orderForms[key]})
        }

       

        let form =(<form onSubmit={this.orderHandler}>
            {/* <Input elementType="..." elementConfig="..." value="..."/><br/> */}
            { formElementsArray.map(ig=>(
            <Input key={ig.id}
            elementType={ig.config.elementType} 
            invalid={!ig.config.valid}
            elementConfig={ig.config.elementConfig} 
            shouldValidate={ig.config.validation}
            touched={ig.config.touched}
            value={ig.config.value} changed={(event)=>{this.inputChangeHandler(event,ig.id)}}/>
        ))
            }
             <Button btnType="Success" disabled={!this.state.formIsValid} >Order</Button>   {/* ig.key is name, email etc
           <Input elementType="" elementConfig="" value=""/><br/>
            <Input elementType="" elementConfig="" value=""/><br/> */}
            {/* <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>)*/}
            </form>)
             // change to anonyms fuction to pass arguments 

            if(this.props.loading)
            form=   <Spinner/>
        return(
            <div className={classes.ContactData}>
                <h3>Please enter your contact details</h3>
                {form}

            </div>
        )
    }

}
const mapStateToProps=state=>{
    return{
        ings:state.burgerred.ingredients,
        price:state.burgerred.totalprice,
        loading:state.order.loading,
        token:state.authred.token,
        userId:state.authred.userId
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onOrderBurger:(token,orderdata)=>dispatch(actions.purchaseBurger(token,orderdata))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));