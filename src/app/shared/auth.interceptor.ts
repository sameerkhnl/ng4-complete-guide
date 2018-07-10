import {HttpInterceptor} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs';
import {HttpHandler} from '@angular/common/http/src/backend';
import {HttpRequest} from '@angular/common/http/src/request';
import {Injectable} from '@angular/core';
import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import * as fromAuth from '../auth/auth-module/store/auth.reducer';
import {switchMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


  constructor(private store: Store<fromApp.AppState>){

  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', request);
    return this.store.select('auth').pipe(take(1), switchMap((authState: fromAuth.State) => {
      const copiedRequest = request.clone({params: request.params.append('auth', authState.token)});
      return next.handle(copiedRequest);
    }));
  }
    //const copiedRequest = request.clone({params: request.params.append('auth', this.store.auth.token + '')});}
}
