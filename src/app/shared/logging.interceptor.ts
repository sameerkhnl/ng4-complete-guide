import {HttpInterceptor, HttpRequest} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs';
import {HttpHandler} from '@angular/common/http/src/backend';
import {tap} from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(tap(event => {
      console.log('Logging interceptor', event)
    }));
  }
}
