import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PremadeComponent } from './premade/premade.component';
import { CustomComponent } from './custom/custom.component';
import { CheckValidGuard } from '../guards/check-valid.guard';



@NgModule({
  declarations: [
    PremadeComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'order/premade',
       component : PremadeComponent},
      { path: 'order/custom',
       component: CustomComponent,
       canDeactivate: [CheckValidGuard]
    }
    ])
  ],
  exports: [
    PremadeComponent,
    CustomComponent
  ]
})
export class OrderFormModule { }
