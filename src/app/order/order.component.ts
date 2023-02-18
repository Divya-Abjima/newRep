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
      this.router.navigate(['pre-made'], { relativeTo :this.route});
    }
    if(value==2) {
      this.form1=false;
      this.showButton=true;
      this.router.navigate(['custom'], {relativeTo: this.route});
    }
  }
  goBack() {
    this.form1=true;
    this.form2=true;
    this.router.navigate(['/order'], {relativeTo: this.route});
    this.showButton=false;
  }
} 
