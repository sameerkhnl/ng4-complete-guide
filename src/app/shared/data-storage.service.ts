import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()

export class DataStorageService {
  baseUrl = "https://ng-recipe-book-a5382.firebaseio.com/recipes.json";
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

  }

  putRecipes() {
    const recipes = this.recipeService.getAllRecipes();
    const token = this.authService.getToken();
    return this.http.put(this.baseUrl + "?auth=" + token, recipes);
  }

  getRecipes(){
    const token = this.authService.getToken();
    this.http.get<Recipe[]>(this.baseUrl + "?auth=" + token).subscribe((recipes: Recipe[]) =>{
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
