import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {AppState} from '../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AuthActions from './auth-module/store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private store: Store<AppState>) { }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error)).then(user => {
      this.store.dispatch(new AuthActions.SignUp());
      firebase.auth().currentUser.getIdToken().then(token => {
        this.store.dispatch(new AuthActions.SetToken(token))
        this.router.navigate(['']);
      });
    });
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      this.store.dispatch(new AuthActions.SignIn())
      firebase.auth().currentUser.getIdToken().then(token => {
        this.store.dispatch(new AuthActions.SetToken(token))
        this.router.navigate(['']);
      });
      console.log(response);
    }).catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.LogOut());
  }
}
