import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {Ingredient} from '../shared/Ingredient';
import {ShoppingListService} from './shopping-list.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subs: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngredients();
    this.subs = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onItemSelect(i: number){
    this.shoppingListService.startedEditing.next(i);
  }
}
