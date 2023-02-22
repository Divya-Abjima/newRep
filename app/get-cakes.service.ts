import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable, tap, map, take } from 'rxjs';
import { Info } from './product/info';
@Injectable({
  providedIn: 'root'
})
export class GetCakesService {
  public errMsg='';
  private _url: string = '/assets/product-info.json';
  constructor(private http: HttpClient) { }

  getCakes(): Observable<Info[]> {
    return this.http.get<Info[]>(this._url)
      .pipe( 
        // tap(data => console.log(data)),
        tap(cakes => 
          cakes.map( cake => ({
            ...cake,
            id: cake.id ? (cake.id+=1) : 0
          } as Info ) ),
          // tap(id => id ? console.log(id) : console.log('empty'))
          ) ,
          tap(data => console.log(data)),
        catchError(err => {
        this.errMsg = err;
        return EMPTY;
      }))
  }
}
