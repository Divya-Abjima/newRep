import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCakesService } from '../get-cakes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public cakes: any=[];
  // public info:any=[];

  constructor(private _getCakesService : GetCakesService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.cakes = this._getCakesService.getCakes();
    // this.info=this.activatedRoute.snapshot.data['data'];
  }

  getOrder(value:any) {
    this.router.navigate(['order/pre-made']);
  }
}
