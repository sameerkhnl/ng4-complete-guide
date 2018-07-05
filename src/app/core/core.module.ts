import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../home/home.component';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],

  providers: [ShoppingListService, RecipeService, DataStorageService],

  exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule { }
