import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {HomeComponent} from './home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe/recipe-list/recipe-item/recipe-item.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipeComponent, children: [
      {path: ':id', component: RecipeDetailComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
