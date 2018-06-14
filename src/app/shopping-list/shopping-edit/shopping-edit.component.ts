import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName;
  @ViewChild('amountInput') ingredientAmount;

  @Output('addIngredientEvent') ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    this.ingredientEmitter.emit(new Ingredient(ingName, ingAmount));
  }

}
