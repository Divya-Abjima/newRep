import { Component } from '@angular/core';
import { GetCakesService } from 'src/app/get-cakes.service';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  public cakes: any = [];
  public show = false;
  showButton=true;
  constructor(private getCakeService: GetCakesService,
    private router : Router) { }
  // customForm = new FormGroup([]);
  name = new FormControl('');
  email = new FormControl('');
  contact = new FormControl('');
  flavour = new FormControl('');
  icing = new FormControl('');
  layers = new FormControl('');
  plotNo = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  pin = new FormControl('');
  img = new FormControl('');
  // })

  ngOnInit() {
    this.cakes = this.getCakeService.getCakes();
  }
  showMessage() {
    this.show = true;
  }
  goBack() {
    this.router.navigate(['order']);
    this.showButton=false;
  }
}
