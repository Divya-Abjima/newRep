import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeCategory } from './category';
import { tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = '/assets/category.json';
  constructor(
    private _http : HttpClient
  ) { }
  cakeCategories$ = this._http.get<CakeCategory[]>(this.categoryUrl)
  .pipe(
    tap( (data) => console.log(data))
  );

}
