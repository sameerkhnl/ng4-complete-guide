import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {Observable} from 'rxjs';

@Injectable()

export class DataStorageService {
  baseUrl = "https://ng-recipe-book-a5382.firebaseio.com/recipes.json";
  constructor(private http: HttpClient, private recipeService: RecipeService) {

  }

  putRecipes() {
    const recipes = this.recipeService.getAllRecipes();
    return this.http.put(this.baseUrl, recipes);
  }

  getRecipes(){
    this.http.get<Recipe[]>(this.baseUrl).subscribe((recipes: Recipe[]) =>{
      for(let recipe of recipes){
        if(!recipe['ingredients']) {
          recipe['ingrdients'] = [];
          console.log(recipe);
        }
      }
      this.recipeService.setRecipes(recipes)
    });
  }
}
