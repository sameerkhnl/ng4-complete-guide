import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private  recipeService: RecipeService, private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    //this.recipeSelected = this.recipeService.getSelectedRecipe();

  }

  recipeSelected() {
    return this.recipeService.selectedRecipe;
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipeSelected().ingredients);
  }

}
