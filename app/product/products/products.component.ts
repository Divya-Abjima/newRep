import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCakesService } from 'src/app/get-cakes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public cakes: any=[];
  // cakes$: Observable<any>;
  cakes$ : Observable<any> | undefined;

  constructor(private _getCakesService : GetCakesService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.cakes = this.activatedRoute.snapshot.data['data'];
    console.log('data fetching');
  }

  getOrder(value:any) {
    this.router.navigate(['order-form/premade']);
  }
}
