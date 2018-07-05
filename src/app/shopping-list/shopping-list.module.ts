import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {FormsModule} from '@angular/forms';
import {BetterHighlightDirective} from '../better-highlight/better-highlight.directive';
import {BasicHighlightDirective} from '../basic-highlight/basic-highlight.directive';
import {UnlessDirective} from '../unless-directive/unless.directive';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    UnlessDirective
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
