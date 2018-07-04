import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm: FormGroup
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.authService.signinUser(email, password);
  }
}
