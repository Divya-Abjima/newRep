import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './product/product.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';
import { GetCakesService } from './get-cakes.service';
import { ResolveGuard } from './guards/resolve.guard';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CheckValidGuard } from './guards/check-valid.guard';
// import { OrderFormModule } from './order-form/order-form.module';
@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   ErrorComponent,
   HomeComponent,
   SpecialMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    // OrderFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetCakesService, ResolveGuard, CheckValidGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
