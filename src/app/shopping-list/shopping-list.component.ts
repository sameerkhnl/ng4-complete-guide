import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';
import {ShoppingListService} from './shopping-list.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subs: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    //this.shoppingListState.subscribe(x => console.log(x));
    // this.subs = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients;
    // })
  }

  ngOnDestroy(){
    //this.shoppingListState.unsubscribe();
  }

  onItemSelect(i: number){
    this.shoppingListService.startedEditing.next(i);
  }
}
