import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';
import {Subject} from 'rxjs';


export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)
  ];

  ingredientsChanged = new Subject();
  startedEditing = new Subject<number>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(ingredient: Ingredient, i: number){
    this.getAllIngredients()[i].name = ingredient.name;
    this.getAllIngredients()[i].amount = ingredient.amount;
  }

  getAllIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]){
    ingredients.forEach(i => this.ingredients.push(i));
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(i: number) {
    this.ingredients.splice(i, 1);
  }
}
