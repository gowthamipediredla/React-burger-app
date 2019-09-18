import React from 'react';
import classes from './Input.css'

const input=props=>{
let inputelement=null;
let validationError=null
const inputclass=[classes.Inputelement];
if(props.invalid && props.shouldValidate && props.touched){
    validationError = <p>Please enter a valid value!</p>;   
    inputclass.push(classes.Invalid)
}
    switch(props.elementType){
        case('input'):
        inputelement=<input className={inputclass.join(' ')}  value={props.value} {...props.elementConfig} onChange={props.changed}/>
        break;
        case('textarea'):
        inputelement=<textarea className={inputclass.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
        break;

        case('select'):
        inputelement=(<select 
        className={inputclass.join(' ')} 
        value={props.value}
        onChange={props.changed}> 
            {props.elementConfig.options.map(option=>(
                <option key={option.value}  // due to puttng ONchnage here, select dint work
               
                value={option.value} >{option.displayValue}</option>
            ))}
           
             </select>);
        break;
        default:
        inputelement=<input className={inputclass.join(' ')} {...props.elementConfig}
        value={props.value} onChange={props.changed}/>   
     }
    return (
       <div className={classes.Input}>
           <label className={classes.Input}>{props.label}</label>
           {inputelement}
          { validationError}
       </div>
    )
}

export default input;