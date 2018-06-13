import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Output() navEvent= new EventEmitter<string>();
  @ViewChild('liRecipes') liRecipes;
  @ViewChild('liShoppingList') liShoppingList;


  createRecipeEvent() {
    this.navEvent.emit('recipe');
    console.log(this.liRecipes);
    this.liShoppingList.nativeElement.classList.remove('active')
    this.liRecipes.nativeElement.classList.toggle('active');
  }

  createShoppingListEvent() {
    this.navEvent.emit('shopping-list');
    this.liRecipes.nativeElement.classList.remove('active');
    this.liShoppingList.nativeElement.classList.toggle('active');
  }
}
