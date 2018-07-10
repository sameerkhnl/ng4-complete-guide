import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Observable, Subscription} from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';
import {Store} from '@ngrx/store';
import * as fromRecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  subscription: Subscription;
  recipesState: Observable<fromRecipe.State>;

  constructor(private store: Store<fromRecipe.FeatureState>) {
  }


  ngOnInit() {
    this.recipesState = this.store.select('recipes');

  }

  createNewRecipe() {
    this.store.dispatch(new fromRecipeActions.AddRecipe(null));
  }

}
