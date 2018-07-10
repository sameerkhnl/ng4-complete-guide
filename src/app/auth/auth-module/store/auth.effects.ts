import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as fromAuthActions from './auth.actions';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private router: Router) {

  }

  @Effect()
  authSignUp = this.actions$.ofType(fromAuthActions.TRY_SIGN_UP).pipe(map((action: fromAuthActions.TrySignUp) => {
    return action.payload;
  }), switchMap((authData: { username: string, password: string }) => {
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
  }), switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getIdToken());
  }), mergeMap((token: string) => {
    return [{
      type: fromAuthActions.SIGN_UP,
    },
      {
        type: fromAuthActions.SET_TOKEN,
        payload: token
      }];
  }));

  @Effect()
  authSignIn = this.actions$.ofType(fromAuthActions.TRY_SIGN_IN).pipe(map((action: fromAuthActions.TrySignIn) => {
    return action.payload;
  }), switchMap((authData: {username: string, password: string}) => {
    return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
  }), switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getIdToken());
  }), mergeMap((token: string) => {
    this.router.navigate(["/"]);
    return [{
      type: fromAuthActions.SIGN_IN
    },
      {
      type: fromAuthActions.SET_TOKEN,
        payload: token
    }];
  }));
}
