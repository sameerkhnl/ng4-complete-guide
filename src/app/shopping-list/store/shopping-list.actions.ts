import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/Ingredient';

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const UPDATE_INGREDIENTS= "UPDATE_INGREDIENTS";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const STARTED_EDITING = "STARTED_EDITING";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  //payload: Ingredient

  constructor(public payload: Ingredient){

  }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]){

  }

}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: Ingredient, public index: number){

  }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public index: number){

  }
}

export class StartedEditing implements Action {
  readonly type = STARTED_EDITING;
  constructor(public index: number){
  }
}

export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartedEditing;
