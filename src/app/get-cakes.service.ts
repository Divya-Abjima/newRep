import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from './cake-category/category.service';
import { catchError, EMPTY, Observable, tap, map, take, combineLatest } from 'rxjs';
import { Info } from './product/info';
@Injectable({
  providedIn: 'root'
})
export class GetCakesService {
  public errMsg = '';
  private _url: string = '/assets/product-info.json';


  getCakes(): Observable<Info[]> {
    return this.http.get<Info[]>(this._url)
      .pipe(
        // tap(data => console.log(data)),
        tap(cakes =>
          cakes.map(cake => ({
            ...cake,
            id: cake.id ? (cake.id += 1) : 0
          } as Info)),
          // tap(id => id ? console.log(id) : console.log('empty'))
        ),
        tap(data => console.log(data)),
        catchError(err => {
          this.errMsg = err;
          return EMPTY;
        }))
  }
  withCategories$ = combineLatest([
    this.getCakes(),
    this.cakeCategoryService.cakeCategories$,
  ]).pipe(
    map(([cakes, categories]) =>
      cakes.map(cake => ({
        ...cake,
        id: cake.id ? cake.id++ : 0,
        category: categories.find(c => cake.id === c.id)?.bread
      } as Info))
    )
  )
  constructor(private http: HttpClient,
    private cakeCategoryService: CategoryService) { }

 

  demoItem() {
    return [
      {"id": 7},
      { "name": "Green forest"},
      { "flavour": ['macha', 'chocolate', 'vanilla'] },
      { "url": ''},
      { "bread": 'macha-choco'},
      { "category": 'custom'}
    ]
  }
}
