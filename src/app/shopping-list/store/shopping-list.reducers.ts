import {Ingredient} from '../../shared/Ingredient';
import {ADD_INGREDIENT, ADD_INGREDIENTS, AddIngredient, ShoppingListActions} from './shopping-list.actions';
import {forEach} from '@angular/router/src/utils/collection';

export const initialState = {
  ingredients: [new Ingredient('apples', 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)]
};

export function ShoppingListReducer(state = initialState, action: ShoppingListActions) {

  switch (action.type) {
    case ADD_INGREDIENT:
      state.ingredients.push(action.payload);
      return {
        ...state,
      };

    case ADD_INGREDIENTS:
      action.payload.forEach(i => state.ingredients.push(i));
      return {
        ...state
      };

    default:
      //console.log('default state returning...');
      return {
        ...state
      };

  }
}
