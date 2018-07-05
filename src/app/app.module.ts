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
import {RecipesModule} from './recipe/recipes.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: 'ng4-complete-guide';
}
