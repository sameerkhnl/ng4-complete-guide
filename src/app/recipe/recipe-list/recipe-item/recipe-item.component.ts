import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipeItem() {
    this.recipeService.selectRecipe(this.recipe);
  }



}
