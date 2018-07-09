import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';
import {NgForm} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddIngredient, DeleteIngredient, StopEdit, UpdateIngredient} from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  @ViewChild('submitBtn') submitBtn: ElementRef;
  editMode = false;
  shoppingListState: Observable<{ ingredients: Ingredient[], editedIngredient: Ingredient, editedIngredientIndex: number }>;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    this.subscription = this.shoppingListState.subscribe(x => {
      if (x.editedIngredientIndex !== -1) {
        this.editMode = true;
        this.slForm.setValue({
          name: x.editedIngredient.name,
          amount: x.editedIngredient.amount
        });
      }
    });

  }

  addOrUpdateIngredient() {
    const ingName = this.slForm.value.name;
    const ingAmount = this.slForm.value.amount;
    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient(new Ingredient(ingName, ingAmount)));
      //this.shoppingListService.updateIngredient(new Ingredient(ingName, ingAmount), this.editItemIndex);

    } else {
      this.store.dispatch(new AddIngredient(new Ingredient(ingName, ingAmount)));
      //this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
    }
    this.slForm.reset();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    if (this.editMode) {
      this.store.dispatch(new DeleteIngredient());
    }
    this.clearForm();
  }

  ngOnDestroy(){
    this.store.dispatch(new StopEdit());
    this.subscription.unsubscribe();
  }



}
