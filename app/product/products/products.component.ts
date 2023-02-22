import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCakesService } from 'src/app/get-cakes.service';
import { Info } from '../info';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public cakes:any;
  public errorMsg='';
  // cakes$: Observable<any> | undefined;
  // cakes$ : Observable<any> | undefined;

  constructor(private _getCakesService : GetCakesService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

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
    this._getCakesService.getCakes()
    .subscribe({
      next: (data) => this.cakes= data,
    })
    console.log('data fetching');
  }

  getOrder() {
    this.router.navigate(['order-form/premade']);
  }
}
