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
