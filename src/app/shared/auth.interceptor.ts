import {HttpInterceptor} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs';
import {HttpHandler} from '@angular/common/http/src/backend';
import {HttpRequest} from '@angular/common/http/src/request';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', request);
    return next.handle(request);
  }
}
