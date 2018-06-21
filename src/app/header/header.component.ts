import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Output() navEvent= new EventEmitter<string>();
  @ViewChild('liRecipes') liRecipes;
  @ViewChild('liShoppingList') liShoppingList;

  constructor(private router: Router){

  }

  showHomePage() {
    this.router.navigate(['']);
  }

  // navigateToRecipe() {
  //   this.router.navigate(['recipe']);
  //   this.liShoppingList.nativeElement.classList.remove('active')
  //   this.liRecipes.nativeElement.classList.toggle('active');
  // }

  // navigateToShoppingList() {
  //   this.router.navigate(['shopping-list']);
  //   this.liRecipes.nativeElement.classList.remove('active');
  //   this.liShoppingList.nativeElement.classList.toggle('active');
  // }
}
