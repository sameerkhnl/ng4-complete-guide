import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName;
  @ViewChild('amountInput') ingredientAmount;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
  }

}
