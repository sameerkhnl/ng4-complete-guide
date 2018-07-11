import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as fromRecipeActions from './recipe.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Recipe} from '../recipe.model';
import * as fromRecipe from './recipe.reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  baseUrl = 'https://ng-recipe-book-a5382.firebaseio.com/recipes.json';

  @Effect()
  recipeFetch = this.actions$.ofType(fromRecipeActions.FETCH_RECIPES).pipe(switchMap((action: fromRecipeActions.FetchRecipes) => {
    return this.http.get<Recipe[]>(this.baseUrl, {params: new HttpParams()})}), map((recipes: Recipe[]) => {
      for (let recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingrdients'] = [];
          console.log(recipe);
        }

      }
      return {
        type: fromRecipeActions.SET_RECIPES,
        payload: recipes
      };

  }));

  @Effect({dispatch: false})
  recipeStore = this.actions$.ofType(fromRecipeActions.STORE_RECIPES).pipe(withLatestFrom(this.store.select('recipes')), switchMap(([action, state]) => {
    const req = new HttpRequest('PUT', this.baseUrl, state.recipes, {reportProgress: true});
    return this.http.request(req);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRecipe.FeatureState>) {

  }
}
