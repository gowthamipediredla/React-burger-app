import React,{Component} from 'react'
import PropTypes from 'prop-types'
import class2 from './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render(){
        let ingredients=null;

    switch(this.props.type){
        case('bread-bottom'):
        ingredients=<div className={class2.BreadBottom}></div>;
        break;
        case('bread-top'):
        ingredients=(
        <div className={class2.BreadTop}>
            <div className={class2.Seeds1}></div>
            <div className={class2.Seeds2}></div>
        </div>);
         break;
        case ('meat'):
            ingredients=<div className={class2.Meat}></div>
            break;
        case ('cheese'):
         ingredients=<div className={class2.Cheese}></div>
         break;

        case ('salad'):
            ingredients=<div className={class2.Salad}></div>
            break;

        case ('bacon'):
            ingredients=<div className={class2.Bacon}></div>
            break;
        default:
            ingredients=null;
    }
    return ingredients;

    }
}
    
BurgerIngredient.propTypes={
    type:PropTypes.string.isRequired


};
export default BurgerIngredient;