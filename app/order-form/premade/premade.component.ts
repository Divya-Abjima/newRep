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
  showButton =true;
  constructor(private getCakeService : GetCakesService,
    private router:Router) {}
  ngOnInit() {
    // this.cakes=this.getCakeService.getCakes();
    this.getCakeService.getCakes()
        .subscribe({
          next: (data) => this.cakes= data,
        }
          );
  }
  goBack() {
    this.router.navigate(['order']);
    this.showButton=false;
  }
}
