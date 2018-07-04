import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {FormsModule} from '@angular/forms';
import {BetterHighlightDirective} from '../better-highlight/better-highlight.directive';
import {BasicHighlightDirective} from '../basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})

export class ShoppingListModule {

}
