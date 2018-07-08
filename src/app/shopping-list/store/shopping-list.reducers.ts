import {Ingredient} from '../../shared/Ingredient';
import {ADD_INGREDIENT, ADD_INGREDIENTS, DELETE_INGREDIENT, ShoppingListActions, UPDATE_INGREDIENTS} from './shopping-list.actions';

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

    case UPDATE_INGREDIENTS:
      state.ingredients[action.index] = action.payload;
      return {
        ...state
      };

    case DELETE_INGREDIENT:
      state.ingredients.splice(action.index, 1);
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
