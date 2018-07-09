import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers'
import * as fromAuth from '../auth/auth-module/store/auth.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State,
  auth: fromAuth.State
}
