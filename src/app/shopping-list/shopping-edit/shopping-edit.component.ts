import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';
import {NgForm} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddIngredient, DeleteIngredient, UpdateIngredient} from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  @ViewChild('submitBtn') submitBtn: ElementRef;
  subscription: Subscription;
  editMode = false;
  shoppingListState: Observable<{ ingredients: Ingredient[], editedIngredient: Ingredient, editedIngredientIndex: number }>;

  constructor(private store: Store<{ shoppingList: { ingredients: Ingredient[], editedIngredient: Ingredient, editedIngredientIndex: number } }>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    this.shoppingListState.subscribe(x => {
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
      this.store.dispatch(new UpdateIngredient(new Ingredient(ingName, ingAmount), this.editItemIndex));
      //this.shoppingListService.updateIngredient(new Ingredient(ingName, ingAmount), this.editItemIndex);
      this.editMode = false;
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


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
