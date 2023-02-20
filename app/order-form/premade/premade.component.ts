import { Component } from '@angular/core';
import { GetCakesService } from 'src/app/get-cakes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.css']
})
export class PremadeComponent {
  public cakes:any=[];
  show: boolean=false;
  showButton =true;
  constructor(private getCakeService : GetCakesService,
    private router:Router) {}
  ngOnInit() {
    this.cakes=this.getCakeService.getCakes();
  }
  showMessage() {
    this.show=true;
  }
  goBack() {
    this.router.navigate(['order']);
    this.showButton=false;
  }
}
