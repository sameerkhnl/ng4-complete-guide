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

}
