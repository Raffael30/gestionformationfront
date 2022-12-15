import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token')) {
      let auth = sessionStorage.getItem('token') ?? "";
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: auth
        }
      })
    }
    return next.handle(httpRequest);
  }
}