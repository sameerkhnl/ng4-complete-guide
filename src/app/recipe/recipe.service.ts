import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient';
import {Subject} from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(0, 'Pizza Margherita',
      'Even a novice cook can master the art of pizza with our simple step-by-step guide. Bellissimo',
      'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?cs=srgb&dl=baked-beer-cheese-724216.jpg&fm=jpg', [new Ingredient('bread flour', 300), new Ingredient('passata', 100), new Ingredient('garlic clove', 1)]),

    new Recipe(1, 'Cannoli',
      'A classic Italian pastry with a crisp shell and creamy, sweet ricotta filling, it\'s a moreish treat',
      'https://cdn.pixabay.com/photo/2015/06/17/07/34/dessert-812050_1280.jpg', [
        new Ingredient('plain flour', 150), new Ingredient('cinnamon', 1), new Ingredient('butter', 30), new Ingredient('egg', 1)])
  ];
  selectedRecipe: Recipe;

  //recipeEmitter = new EventEmitter<Recipe>();

  createNewEmptyRecipe() {
    this.recipes.push(new Recipe(this.recipes.length, 'hello', '', '', []));
  }

  createRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length;
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    console.log(this.recipes);
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

  getRecipeById(id: number) {
    return this.recipes.find(r => r.id === id);
  }

  updateRecipe(recipe: Recipe) {
    this.recipes.filter(r => r.id === recipe.id).forEach( r => this.recipes[r.id] = recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: Number) {
    this.recipes.splice(id, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
