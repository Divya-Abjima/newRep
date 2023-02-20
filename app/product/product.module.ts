import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ResolveGuard } from '../guards/resolve.guard';



@NgModule({
  declarations: [ProductsComponent], 
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cakes',
       component : ProductsComponent,
      resolve: {data: ResolveGuard}}
    ])
  ],
  exports: [ProductsComponent]
})
export class ProductModule { }
 