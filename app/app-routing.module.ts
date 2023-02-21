import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CheckValidGuard } from './guards/check-valid.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { HomeComponent } from './home/home.component';
// import { OrderFormModule } from './order-form/order-form.module';
import { OrderComponent } from './order/order.component';
import { ProductModule } from './product/product.module';
import { SpecialMenuComponent } from './special-menu/special-menu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'our-special', component: SpecialMenuComponent, outlet: 'specialMenu' },
  // {
  //   path: 'cakes',
  //   component: ProductsComponent,
  //   resolve: { data: ResolveGuard}
  // },

  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'order-form',
    loadChildren: () =>
      import('./order-form/order-form.module').then(m => m.OrderFormModule)
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
    ProductModule,
    // OrderFormModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  SpecialMenuComponent,
  OrderComponent,
  ContactComponent,
  ErrorComponent
]
