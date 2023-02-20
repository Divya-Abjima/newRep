import { Component, OnInit } from '@angular/core';
import { GetCakesService } from '../get-cakes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public cakes:any=[];
  public show=false;
  public form1=true;
  public form2=true;
  public showButton=false;
  constructor(private _getCakesService : GetCakesService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.cakes=this._getCakesService.getCakes();
  }
  
  orderPage(value:number) {
    if(value==1) {
      this.form2=false;
      this.showButton=true;
      this.router.navigate(['order/premade']);
    }
    if(value==2) {
      this.form1=false;
      this.showButton=true;
      this.router.navigate(['order/custom']);
    }
  }
} 
