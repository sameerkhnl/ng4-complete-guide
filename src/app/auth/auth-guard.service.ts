import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './auth-module/store/auth.reducer';
import {map, take} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(take(1), map((authState: fromAuth.State) => {
      console.log(authState.authenticated);
      return authState.authenticated;
    }));
  }
}
