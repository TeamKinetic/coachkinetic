import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingEndingComponent } from './booking-ending/booking-ending.component';

import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

@NgModule({
  declarations: [
    BookingEndingComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    
  ],
  exports: [
    BookingEndingComponent
  ]
})
export class AdminSharedModule { }