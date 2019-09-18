import * as actiontypes from '../actions/actionTypes'
import {updateObject}  from '../../shared/Utility'
const initialState={
    ingredients:null,// null if fetching.
    // if not fetching, then give ingredients object
    totalprice:40,
    error:false,
    building:false
}; 

const INGREDIENT_PRICES={
    salad:20,
    bacon:40,
    meat:50,
    cheese:15

}

const setIngredients = (state, action) => { 
    return updateObject( state, {
    ingredients: {
        salad:action.ingredients.salad,
      bacon:action.ingredients.bacon,
      cheese:action.ingredients.cheese,
      meat:action.ingredients.meat,
    },
    error:false,
    totalprice:40,
    building:false
} );




 

}



const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actiontypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                 [action.ingredientName]:state.ingredients[action.ingredientName]+1
                 //es6 
                },
                totalprice:state.totalprice+INGREDIENT_PRICES[action.ingredientName],
                building:true
                

            }
        case actiontypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                 [action.ingredientName]:state.ingredients[action.ingredientName]-1
                

                 //es6 , assigning a dynamic property name in an object
            },
            totalprice:state.totalprice-INGREDIENT_PRICES[action.ingredientName],
            building:true
        }
        case actiontypes.SET_INGREDIENTS: return setIngredients(state, action);    

            case actiontypes.FETCH_INGREDIENTS_FAILED:
                    return{
                      ...state,
                     error:true
                    }
        default:
            return state;
    }

    }
   


export default reducer;