import {HttpInterceptor} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs';
import {HttpHandler} from '@angular/common/http/src/backend';
import {HttpRequest} from '@angular/common/http/src/request';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


  constructor(private authService: AuthService){

  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', request);
    const copiedRequest = request.clone({params: request.params.append('auth', this.authService.token)});

    return next.handle(copiedRequest);
  }
}
