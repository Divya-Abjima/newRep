import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeCategory } from './category';
import { tap, catchError, shareReplay, of, map, mergeMap, switchMap } from 'rxjs';
import { Info } from '../product/info';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = '/assets/category.json';
  public newFlavor = [
    {"id" : 4},
    {"bread" : "red velvet"}
  ];  
  constructor(
    private _http : HttpClient
  ) { }
  cakeCategories$ = this._http.get<CakeCategory[]>(this.categoryUrl)
  .pipe(
    tap( (data) => console.log(data)),
    shareReplay(1),
    tap((data) => console.log("After shareReplay"))
  );

  cakesWithMergeMap$ = of(1)
  .pipe(
    tap(num => console.log('MergeMap observable', num)),
    mergeMap(num => this._http.get<CakeCategory[]>(this.categoryUrl)),
    tap((data)=> console.log("Merged"))
  );
  // cakesWithSwitchMap$ = of(1,2,3)
  // .pipe(
  //   tap(num => console.log('SwitchMap observable',num)),
  //   switchMap(num => this._http.get<CakeCategory[]>(this.categoryUrl)),
  //   tap((data)=> console.log("SwitchMap data"))
  // );
  // postCakeCtageory$ = this._http.post<CakeCategory>(this.categoryUrl, this.newFlavor)
  // .pipe(
  //   tap((data)=> console.log(data))
  // )
  // .subscribe();

}
