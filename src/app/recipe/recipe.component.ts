import {AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit, AfterViewChecked {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {

  }

  recipeSelected() {
    return this.recipeService.getSelectedRecipe();
  }


  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngAfterViewChecked() {
  }
}
