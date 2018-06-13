import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {Ingredient} from '../shared/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient('onions', 2),
    new Ingredient('tomatoes', 6)
  ];

  constructor() { }

  ngOnInit() {
  }

}
