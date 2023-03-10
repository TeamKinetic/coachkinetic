import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { MainSharedModule } from 'src/app/shared/main-shared.module';
import { SessionsModule } from './sessions/sessions.module';
import { CustomersModule } from './customers/customers.module';
import { AdminSharedModule } from './shared/admin-shared.module';

import { DoubleBookingsComponent } from './admin-home-index/double-bookings/double-bookings.component';
import { ShowSessionsComponent } from './admin-home-index/show-sessions/show-sessions.component';
import { LatestConfirmedBookingsComponent } from './admin-home-index/latest-confirmed-bookings/latest-confirmed-bookings.component';
import { AdminHomeIndexComponent } from './admin-home-index/admin-home-index.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    DoubleBookingsComponent,
    ShowSessionsComponent,
    LatestConfirmedBookingsComponent,
    AdminHomeIndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    SessionsModule,
    CustomersModule,
    MainSharedModule,
    AdminSharedModule,
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
