import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { catchError, of } from 'rxjs';
import { GetCakesService } from '../get-cakes.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  // public sendData:;

  constructor(private getCakeService : GetCakesService) {
  }
  resolve(route: ActivatedRouteSnapshot) {
    console.log('fetching data...');
    return this.getCakeService.getCakes();
  }
  
}
