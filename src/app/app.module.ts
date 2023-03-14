import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './feature/public/index/index.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MainSharedModule } from './shared/main-shared.module';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
   // FullCalendarModule, 
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MainSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
