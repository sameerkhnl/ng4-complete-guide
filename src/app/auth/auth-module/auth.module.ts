import {NgModule} from '@angular/core';
import {SignupComponent} from '../signup/signup.component';
import {SigninComponent} from '../signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
  ]
})
export class AuthModule { }
