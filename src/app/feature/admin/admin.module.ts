import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { MainSharedModule } from 'src/app/shared/main-shared.module';
import { SessionsModule } from './sessions/sessions.module';
import { CustomersModule } from './customers/customers.module';


@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SessionsModule,
    CustomersModule,
    MainSharedModule,
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
