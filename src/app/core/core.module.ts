import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../home/home.component';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {LoggingInterceptor} from '../shared/logging.interceptor';

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

  providers: [ShoppingListService, RecipeService, DataStorageService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}],

  exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule { }
