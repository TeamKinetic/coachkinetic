import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'
import { DayPilotModule } from 'daypilot-pro-angular';

import { RouterModule } from '@angular/router';
import { SessionsRoutingModule } from './sessions-routing.module';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { SessionHomeComponent } from './session-home/session-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CheckOffSessionsComponent } from './check-off-sessions/check-off-sessions.component';
import { CoachScheduleComponent } from './coach-schedule/coach-schedule.component';
import { EndingBookingsComponent } from './ending-bookings/ending-bookings.component';
import { SearchSessionsComponent } from './search-sessions/search-sessions.component';
import { IndividualSessionComponent } from './create-booking/individual-session/individual-session.component';
import { RepeatingSessionComponent } from './create-booking/repeating-session/repeating-session.component';



@NgModule({
  declarations: [
    SessionHomeComponent,
    CreateBookingComponent,
    BookingCalendarComponent,
    CheckOffSessionsComponent,
    CoachScheduleComponent,
    EndingBookingsComponent,
    SearchSessionsComponent,
    IndividualSessionComponent,
    RepeatingSessionComponent,
  ],
  imports: [
    CommonModule,
    FullCalendarModule, // register FullCalendar with your app
    DayPilotModule,
    
    RouterModule,
    SessionsRoutingModule,
    AdminSharedModule,
    AngularMaterialModule
  ]
})
export class SessionsModule { }
