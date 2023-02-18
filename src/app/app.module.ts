import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';
import { GetCakesService } from './get-cakes.service';
import { ResolveGuard } from './guards/resolve.guard';
import { PremadeComponent } from './premade/premade.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   ErrorComponent,
   HomeComponent,
   SpecialMenuComponent,
   PremadeComponent,
   CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GetCakesService, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
