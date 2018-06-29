import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {forEach} from '@angular/router/src/utils/collection';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => this.recipes = recipes);
    this.recipes = this.recipeService.getAllRecipes();
  }

  createNewRecipe() {
    this.recipeService.createNewEmptyRecipe();
  }


}
