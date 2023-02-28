import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { tap } from 'rxjs';

import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptorService implements HttpInterceptor{

  constructor(private cacheService : CacheService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method !=='GET') {
      this.cacheService.invalidateCache();
      return next.handle(req);
    }
    const cachedResponse : HttpResponse<any>|undefined = this.cacheService.get(req.url);

    if(cachedResponse) {
      console.log(`Response - ${cachedResponse.url}, Status - ${cachedResponse.status}`);
      return of(cachedResponse);
    } 
    return next.handle(req)
    .pipe(
      tap(event => {
        if(event instanceof HttpResponse) {
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
