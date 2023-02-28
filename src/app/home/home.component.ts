import { Component } from '@angular/core';
import { of, from, map, tap, Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { CategoryService } from '../cake-category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  greeting= 'how are you?';
  mergeMapInfo$ : Observable<any> | undefined;
  switchMapInfo$ : Observable<any> | undefined;
 public flavor:string | any;

  constructor(private getCategories : CategoryService) {}
  ngOnInit() {
    of(99, 28, 200).pipe(
      map(item => {
        if(item >= 100) {
          throw 'Error!';
        }
        return item;
      }),
      catchError(err => of('greater than 100'))
    )
    .subscribe((item)=> console.log(item));
    from([255, 322, 222]).subscribe({
      next: (item) => console.log(`Resulted item...${item}`),
      error: (err) => console.log(`Error ${err}`),
      complete: () => console.log('Done.'),
     });

     //string values
     of('Hello, ').pipe(
      tap(message => console.log(message)),
      map(message => message + this.greeting),
     )
     .subscribe((message) => console.log(message));
     from(['How are you?']).subscribe({
      next: (greet) => console.log(greet),
      error: (err) => console.log(`Error ${err}`),
      complete: () => console.log('Done.'),
     });
  
     this.mergeMapInfo$ = this.getCategories.cakesWithMergeMap$;
    //  this.switchMapInfo$=this.getCategories.cakesWithSwitchMap$;
  }
  // addFlavor(){
  //   this.flavor = this.getCategories.postCakeCtageory$;
  // }
}
