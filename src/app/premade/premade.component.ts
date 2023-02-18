import { Component } from '@angular/core';
import { GetCakesService } from '../get-cakes.service';

@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.css']
})
export class PremadeComponent {
  public cakes:any=[];
  show: boolean=false;
  constructor(private getCakeService : GetCakesService) {}
  ngOnInit() {
    this.cakes=this.getCakeService.getCakes();
  }
  showMessage() {
    this.show=true;
  }
}
