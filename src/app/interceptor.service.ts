import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpContextToken } from '@angular/common/http';
import { Observable } from 'rxjs';

export const CONTENT_TYPE= new HttpContextToken(() => 'application/json');
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log(`Interceptor loading ${req.url}`);

   let jsonReq: HttpRequest<any> = req.clone({
    setHeaders: {
      'Content-type': req.context.get(CONTENT_TYPE)
    }
   });
   return next.handle(jsonReq);
  }
  constructor() { }
}
