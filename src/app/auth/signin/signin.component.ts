import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as fromAuthActions from '../auth-module/store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm: FormGroup
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.store.dispatch(new fromAuthActions.TrySignIn({username: email, password: password}));
  }
}
