import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[]
})
export class RecipeComponent implements OnInit, AfterViewChecked {



  constructor(private recipeService: RecipeService) {

  }

  recipeSelected() {
    return this.recipeService.getSelectedRecipe();
  }


  ngOnInit() {

  }

  ngAfterViewChecked() {
  }
}
