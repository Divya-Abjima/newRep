import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'our-special', component: SpecialMenuComponent, outlet: 'specialMenu' },
  { path: 'cakes', component: ProductsComponent},
  { path: 'order', component: OrderComponent },
  { path: 'contact', component:ContactComponent },
  { path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  ProductsComponent,
  SpecialMenuComponent,
  OrderComponent,
  ContactComponent,
  ErrorComponent
]
