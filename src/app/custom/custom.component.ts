import { Component } from '@angular/core';
import { GetCakesService } from '../get-cakes.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  public cakes:any=[];
  public show=false;
  constructor(private getCakeService : GetCakesService) {}
  ngOnInit() {
    this.cakes=this.getCakeService.getCakes();
  }
  showMessage() {
    this.show=true;
  }
}
