import React,{Component} from 'react'
import Input  from '../../components/Burger/UI/Input/Input'
import Button  from '../../components/Burger/UI/Button/Button'
import classes from './Auth.css'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Spinner from '../../components/Burger/UI/Spinner/Spinner'
import {Redirect} from 'react-router-dom'
class Auth extends Component {

    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Mail address'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
                 },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Your password'
                },
                value:'',
                validation:{
                    required:true,
                    minlength:6
                },
                valid:false,
                touched:false
            }
        },
        
            isSignUp:true
    }
    componentDidMount(){
        if(!this.props.buildingBurger && this.props.authRedirectPath!=='/'){
           // console.log(this.props.buildingBurger+'and '+this.props.authRedirectPath)
            this.props.onSetAuthRedirectPath()
        }
    }
    switchSignUpHandler=()=>{
        this.setState(prevState=>{
            return{isSignUp:!prevState.isSignUp}
        })
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
    inputChangeHandler=(event,controlName)=>{
        const updateControls={
            ...this.state.controls,
        [controlName]:{
            ...this.state.controls[controlName],
            value:event.target.value,
            valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),// validation is rules
            touched:true
        }}
        this.setState({
            controls:updateControls
        })
    }
    submitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp)
    }
    render() {
        const formElementsArray=[]
        for(let key in this.state.controls){
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            })
        }
        let form=formElementsArray.map(ig=>(
            <Input key={ig.id}
            elementType={ig.config.elementType} 
            invalid={!ig.config.valid}
            elementConfig={ig.config.elementConfig} 
            shouldValidate={ig.config.validation}
            touched={ig.config.touched}
            value={ig.config.value} changed={(event)=>{this.inputChangeHandler(event,ig.id)}}/>
        ))

        if(this.props.loading){
            form=<Spinner/>
        }
        let errormsg=null
        if(this.props.error){
            errormsg=(<p>{this.props.error.message}</p>)
        }
        let authredirect=null
        if(this.props.isAuthenticated){
            
            authredirect=<Redirect to={this.props.authRedirectPath}/>
           
        }
        return (
            <div className={classes.Auth}>
                {authredirect}
                {errormsg}
                <form onSubmit={this.submitHandler}>
              {form} 
             
              <Button btnType="Success">SUBMIT</Button> <br/> </form>
                <Button clicked={this.switchSignUpHandler} btnType="Danger">SWITCH TO {this.state.isSignUp?'SIGNIN':'SIGNUP'}</Button>
             
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        loading:state.authred.loading,
        error:state.authred.error,
        isAuthenticated:state.authred.token!==null,
        buildingBurger:state.burgerred.building,
        authRedirectPath:state.authred.authRedirectPath
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(email,password,isSignUp)=>dispatch(actions.auth(email,password,isSignUp)),
        onSetAuthRedirectPath:()=>dispatch(actions.setAuthRedirectPath('/'))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth)