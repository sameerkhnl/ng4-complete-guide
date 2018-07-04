import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: 'src/app/recipe/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: 'src/app/shopping-list/shopping-list.module#ShoppingListModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
