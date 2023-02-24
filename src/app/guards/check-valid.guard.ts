import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomComponent } from '../order-form/custom/custom.component';
import { OrderComponent } from '../order/order.component';
import { PremadeComponent } from '../order-form/premade/premade.component';

@Injectable({
  providedIn: 'root'
})
export class CheckValidGuard implements CanDeactivate<CustomComponent> {
  canDeactivate(
    component: CustomComponent,
    // PremadeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.name.dirty) {
      console.log('navigate?');
      return window.confirm('You have some unsaved changes. Are you okay with navigaitng?')
    }
     return true;
  }

}
