import {Ingredient} from '../../shared/Ingredient';
import {Recipe} from '../recipe.model';
import * as fromRecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';


export interface State {
  recipes: Recipe[];
}

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export const initialState: State = {
  recipes: [
    new Recipe(0, 'Pizza Margherita',
      'Even a novice cook can master the art of pizza with our simple step-by-step guide. Bellissimo',
      'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?cs=srgb&dl=baked-beer-cheese-724216.jpg&fm=jpg', [new Ingredient('bread flour', 300), new Ingredient('passata', 100), new Ingredient('garlic clove', 1)]),

    new Recipe(1, 'Cannoli',
      'A classic Italian pastry with a crisp shell and creamy, sweet ricotta filling, it\'s a moreish treat',
      'https://upload.wikimedia.org/wikipedia/commons/1/14/Cannolo_siciliano_with_chocolate_squares.jpg', [
        new Ingredient('plain flour', 150), new Ingredient('cinnamon', 1), new Ingredient('butter', 30), new Ingredient('egg', 1)])
  ]
};

export function RecipeReducer(state = initialState, action: fromRecipeActions.RecipeActions){
  switch (action.type){
    case fromRecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };

    case fromRecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    case fromRecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      }
      const forUpdateAction = [...state.recipes];
      forUpdateAction[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: forUpdateAction
      };

    case fromRecipeActions.DELETE_RECIPE:
      const forDeleteAction: Recipe[] = [...state.recipes];
      forDeleteAction.splice(action.payload, 1);
      return {
        ...state,
        recipes: forDeleteAction
      };

    default:
      return state;
  }
}
