import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private  recipeService: RecipeService, private shoppingListService: ShoppingListService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.route.params.subscribe((p) => {
      console.log('id: ' + p['id']);
      this.recipeSelected = this.recipeService.getRecipeById(Number(p['id']));
      console.log(this.route);
    });

    //this.recipeSelected = this.recipeService.getSelectedRecipe();

  }

  onDelete(){
    let del: boolean = confirm('Are you sure you want to delete this recipe?');
    if (del){
      this.recipeService.deleteRecipe(this.recipeSelected.id);
      this.router.navigate(["/recipe"]);
    }
  }


  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipeSelected.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
