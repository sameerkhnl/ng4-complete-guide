import {Ingredient} from '../../shared/Ingredient';
import {
  ADD_INGREDIENT,
  ADD_INGREDIENTS,
  DELETE_INGREDIENT,
  ShoppingListActions,
  STARTED_EDITING, STOP_EDIT,
  UPDATE_INGREDIENTS
} from './shopping-list.actions';


export interface State {
  ingredients: Ingredient[],

}

export const initialState = {
  ingredients: [new Ingredient('apples', 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)],
  editedIngredient: <Ingredient>null,
  editedIngredientIndex: -1,

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
      state.ingredients[state.editedIngredientIndex] = action.payload;

      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };

    case DELETE_INGREDIENT:
      state.ingredients.splice(state.editedIngredientIndex, 1);

      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };

    case STARTED_EDITING:
      state.editedIngredientIndex = action.index;
      state.editedIngredient = state.ingredients[state.editedIngredientIndex];
      return {
        ...state
      };

    case STOP_EDIT:

      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      }
    default:
      //console.log('default state returning...');
      return {
        ...state
      };

  }
}
