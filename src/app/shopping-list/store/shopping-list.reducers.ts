import {Ingredient} from '../../shared/Ingredient';
import {ADD_INGREDIENT, ShoppingListActions} from './shopping-list.actions';

export const initialState = {
  ingredients: [new Ingredient("apples", 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)]
}

export function ShoppingListReducer(state = initialState, action: ShoppingListActions) {
  switch(action.type){
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state, action.payload]
      }

    default:
      //console.log('default state returning...');
      return {
        ...state
      }

  }
}
