import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe name', 'test recipe description', 'https://images.pexels.com/photos/248428/pexels-photo-248428.jpeg?cs=srgb&dl=cook-cooked-cooking-248428.jpg&fm=jpg'),
    new Recipe('Test recipe 2', 'test recipe desc 2', 'https://images.pexels.com/photos/1005367/pexels-photo-1005367.jpeg?cs=srgb&dl=appetizer-asian-food-close-up-1005367.jpg&fm=jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  createNewRecipe() {
    this.recipes.push(new Recipe('hello', '', ''));
  }

}
