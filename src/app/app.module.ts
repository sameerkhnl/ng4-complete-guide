import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UnlessDirective} from './unless-directive/unless.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipe/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth-module/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnlessDirective,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: 'ng4-complete-guide';
}
