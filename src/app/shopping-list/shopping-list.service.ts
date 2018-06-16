import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';


export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getAllIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]){
    ingredients.forEach(i => this.ingredients.push(i));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
