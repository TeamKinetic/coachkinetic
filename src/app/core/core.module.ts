import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './components/login/login-admin/login-admin.component';
import { LoginCoachComponent } from './components/login/login-coach/login-coach.component';
import { LoginProviderComponent } from './components/login/login-provider/login-provider.component';
import { ResetComponent } from './components/login/reset/reset.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { LoginFormComponent } from './components/shared/login-form/login-form.component';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LoginAdminComponent,
    LoginCoachComponent,
    LoginProviderComponent,
    ResetComponent,
    
    HeaderComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
  ]
})
export class CoreModule { }
