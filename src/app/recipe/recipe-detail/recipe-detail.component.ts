import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AddIngredients} from '../../shopping-list/store/shopping-list.actions';
import * as fromRecipe from '../store/recipe.reducers';
import * as fromRecipeActions from '../store/recipe.actions';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromRecipe.FeatureState>) {

  }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.route.params.subscribe((p) => {
      console.log('id: ' + p['id']);
      this.id = Number(p['id']);
      console.log(this.route);
      this.recipeState = this.store.select('recipes');
    });

    //this.recipeSelected = this.recipeService.getSelectedRecipe();

  }

  onDelete(){
    let del: boolean = confirm('Are you sure you want to delete this recipe?');
    if (del){
      this.store.dispatch(new fromRecipeActions.DeleteRecipe(this.id));
      this.router.navigate(['/recipes']);
    }
  }


  toShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe((recipeState: fromRecipe.State) => {
      this.store.dispatch(new AddIngredients(recipeState.recipes[this.id].ingredients));
    });

    //this.shoppingListService.addIngredients(this.recipeSelected.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
