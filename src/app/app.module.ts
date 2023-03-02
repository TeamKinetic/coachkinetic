import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './core/components/login/login-admin/login-admin.component';
import { LoginCoachComponent } from './core/components/login/login-coach/login-coach.component';
import { LoginProviderComponent } from './core/components/login/login-provider/login-provider.component';
import { ResetComponent } from './core/components/login/reset/reset.component';
import { LoginFormComponent } from './core/components/shared/login-form/login-form.component';
import { IndexComponent } from './feature/public/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginCoachComponent,
    LoginProviderComponent,
    ResetComponent,
    LoginFormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
