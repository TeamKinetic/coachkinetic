import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginAdminComponent } from './components/login/login-admin/login-admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
