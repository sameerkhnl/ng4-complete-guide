import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Output() navEvent= new EventEmitter<string>();
  @ViewChild('liRecipes') liRecipes;
  @ViewChild('liShoppingList') liShoppingList;

  constructor(private router: Router, private dataStorageService: DataStorageService, private recipeService: RecipeService, private authService: AuthService){

  }

  showHomePage() {
    this.router.navigate(['']);
  }

  onSave(){
    this.dataStorageService.putRecipes().subscribe((response) => console.log(response), (error) => console.log(error));
  }

  onFetch() {
    let recipes: Recipe[];
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
    this.showHomePage();
  }



}
