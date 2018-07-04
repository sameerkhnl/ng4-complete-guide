import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {st} from '@angular/core/src/render3';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: String;

  constructor(private router: Router) { }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      firebase.auth().currentUser.getIdToken().then(token => {
        this.token = token;
        this.router.navigate(['']);
      });
      console.log(response);
    }).catch(error => console.log(error));
  }

  getToken() : String{
    firebase.auth().currentUser.getIdToken().then(token => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
