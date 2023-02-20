import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route';
  public special:boolean=true;
  constructor(private router:Router) {}
  showPopup() {
    this.special=false;
    
    this.router.navigate([{ outlets : { specialMenu : ['our-special'] } }]);
  }
  hidePopup() {
    this.special=true;
    this.router.navigate([{ outlets : { specialMenu : null } } ]);
  }
}
