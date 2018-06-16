import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pizza Margherita',
      'Even a novice cook can master the art of pizza with our simple step-by-step guide. Bellissimo',
      'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?cs=srgb&dl=baked-beer-cheese-724216.jpg&fm=jpg', [new Ingredient('bread flour', 300), new Ingredient('passata', 100), new Ingredient('garlic clove', 1)]),

    new Recipe('Cannoli',
      'A classic Italian pastry with a crisp shell and creamy, sweet ricotta filling, it\'s a moreish treat',
      'https://cdn.pixabay.com/photo/2015/06/17/07/34/dessert-812050_1280.jpg', [
        new Ingredient('plain flour', 150), new Ingredient('cinnamon', 1), new Ingredient('butter', 30), new Ingredient('egg', 1)])
  ];

  selectedRecipe: Recipe;

  //recipeEmitter = new EventEmitter<Recipe>();

  createNewRecipe() {
    this.recipes.push(new Recipe('hello', '', '', []));
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
    //this.recipeEmitter.emit(this.selectedRecipe);
  }

  getAllRecipes() {
    return this.recipes.slice();
  }

  getSelectedRecipe() {
    return this.selectedRecipe;
  }

}
