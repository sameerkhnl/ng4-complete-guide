import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Recipe} from '../recipe/recipe.model';
import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {LogOut} from '../auth/auth-module/store/auth.actions';
import {Observable} from 'rxjs';
import * as fromRecipeActions from '../recipe/store/recipe.actions';

import * as fromAuth from '../auth/auth-module/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  @Output() navEvent= new EventEmitter<string>();
  @ViewChild('liRecipes') liRecipes;
  @ViewChild('liShoppingList') liShoppingList;
  authState: Observable<fromAuth.State>;

  constructor(private router: Router, private store: Store<fromApp.AppState>){

  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  showHomePage() {
    this.router.navigate(['']);
  }

  onSave(){
    this.store.dispatch(new fromRecipeActions.StoreRecipes());
  }

  onFetch() {
    let recipes: Recipe[];
    this.store.dispatch(new fromRecipeActions.FetchRecipes());
  }

  onLogout(){
    this.store.dispatch(new LogOut());
    this.showHomePage();
  }

}
