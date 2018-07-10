import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {AuthService} from '../auth/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/auth-module/store/auth.reducer';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable()

export class DataStorageService {
  baseUrl = 'https://ng-recipe-book-a5382.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private store: Store<fromApp.AppState>) {

  }

  putRecipes() {
    const recipes = this.recipeService.getAllRecipes();
    const req = new HttpRequest('PUT', this.baseUrl, recipes, {reportProgress: true, params: new HttpParams()});
    return this.http.request(req);
  }

  getRecipes() {
    this.http.get<Recipe[]>(this.baseUrl, {params: new HttpParams()}).pipe(map((recipes: Recipe[]) => {
      for (let recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingrdients'] = [];
          console.log(recipe);
        }

      }
      return recipes;
    })).subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  };

}
