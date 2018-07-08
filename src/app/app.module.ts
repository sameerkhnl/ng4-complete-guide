import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth-module/auth.module';
import {CoreModule} from './core/core.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {StoreModule} from '@ngrx/store';
import {ShoppingListReducer} from './shopping-list/store/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ShoppingListModule,
    StoreModule.forRoot({shoppingList: ShoppingListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: 'ng4-complete-guide';
}
