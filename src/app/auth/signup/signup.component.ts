import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as fromAuthActions from '../auth-module/store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: FormGroup
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(new fromAuthActions.TrySignUp({username: email, password: password}));
  }

}
