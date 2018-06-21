import {AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit, AfterViewChecked {
  recipes: Recipe[] = [];
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

  }

  recipeSelected() {
    return this.recipeService.getSelectedRecipe();
  }


  ngOnInit() {
    this.route.params.subscribe((p) => this.id = p['id']);
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngAfterViewChecked() {
  }
}
