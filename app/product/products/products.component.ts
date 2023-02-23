import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCakesService } from 'src/app/get-cakes.service';
import { Info } from '../info';
import { map } from 'rxjs';
import { CategoryService } from 'src/app/cake-category/category.service';
import { CakeCategory } from 'src/app/cake-category/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // public cakes:any;
  public errorMsg='';
  cakes$ : Observable<Info[]> | undefined;
  filteredProducts$ : Observable<Info[]> | undefined;
  categories$ : Observable<CakeCategory[]> | undefined;
  public cakes:any=[];
  public selectedflavor='';
  public categories: any;
  // cakes$: Observable<any> | undefined;
  // cakes$ : Observable<any> | undefined;

  constructor(private _getCakesService : GetCakesService,
     private activatedRoute: ActivatedRoute,
     private router: Router,
     private categoryService : CategoryService) { }

  ngOnInit() {
    // this.cakes = this.activatedRoute.snapshot.data['data'];
    // this.cakes$ = this._getCakesService.getCakes();
    // 
    // this.cakes = this._getCakesService.getCakes();
    // this.cakes$?.subscribe({
    //   next: (data) => ({
    //     this:this.cakes = this._getCakesService.getCakes()
    //   } )
    // }
    // )

    // this._getCakesService.getCakes()
    // .subscribe({
    //   next: (data) => this.cakes= data,
    // })

    this.cakes$ =this._getCakesService.withCategories$;
    this.categories$ = this.categoryService.cakeCategories$;
    // this.cakes=this.cakes$;
    // this.cakes = this._getCakesService.getCakes();
    console.log('data fetching');

    //hardcoded filter
    // this.filteredProducts$ = this.cakes$.pipe(map(products => {
    //   return products.filter(product => product.bread == this.selectedFlavor);
    // })
    // );

    this.filteredProducts$ = this.cakes$.pipe(map(products => {
      return products.filter((product) => this.selectedflavor? product.bread == this.selectedflavor : true);
    })
    );
  }
  onCategoryChange(event: Event) {
    let selectedflavor = (event.target as HTMLSelectElement).value;
    console.log(selectedflavor);
  }
  getOrder() {
    this.router.navigate(['order-form/premade']);
  }
}
