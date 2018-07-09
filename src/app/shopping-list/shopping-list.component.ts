import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {StartedEditing} from './store/shopping-list.actions';

import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subs: Subscription;

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }


  onItemSelect(i: number){
    this.store.dispatch(new StartedEditing(i));
  }

}
