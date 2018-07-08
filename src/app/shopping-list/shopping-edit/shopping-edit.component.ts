import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {ADD_INGREDIENT, AddIngredient} from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  @ViewChild('submitBtn')submitBtn: ElementRef;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  ingredientEdited = new Ingredient('', 0);

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredientsL: Ingredient[]}}>) {

  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((i: number) => {
      this.editItemIndex = i;
      this.editMode = true;
      this.ingredientEdited = this.shoppingListService.getAllIngredients()[i];
      this.slForm.setValue({
        name: this.ingredientEdited.name,
        amount: this.ingredientEdited.amount,
      });
      console.log(this.submitBtn);

    });
  }

  addOrUpdateIngredient() {
    const ingName = this.slForm.value.name;
    const ingAmount = this.slForm.value.amount;
    if(this.editMode){
      this.shoppingListService.updateIngredient(new Ingredient(ingName, ingAmount), this.editItemIndex);
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
    if(this.editMode){
      this.shoppingListService.removeIngredient(this.editItemIndex);
    }
    this.clearForm();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
