import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginAdminComponent } from './core/components/login/login-admin/login-admin.component';
//import { LoginCoachComponent } from './core/components/login/login-coach/login-coach.component';
//import { LoginProviderComponent } from './core/components/login/login-provider/login-provider.component';
//import { ResetComponent } from './core/components/login/reset/reset.component';
//import { LoginFormComponent } from './core/components/shared/login-form/login-form.component';
import { IndexComponent } from './feature/public/index/index.component';

//import { AdminModule } from './feature/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
