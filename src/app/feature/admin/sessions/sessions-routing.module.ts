import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CheckOffSessionsComponent } from './check-off-sessions/check-off-sessions.component';
import { CoachScheduleComponent } from './coach-schedule/coach-schedule.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EndingBookingsComponent } from './ending-bookings/ending-bookings.component';
import { SearchSessionsComponent } from './search-sessions/search-sessions.component';
import { SessionHomeComponent } from './session-home/session-home.component';

const routes: Routes = [
{path:'', component:SessionHomeComponent,
  children: [
    {path:'create-booking', component: CreateBookingComponent},
    {path:'booking-calendar', component: BookingCalendarComponent},
    {path:'check-off-sessions', component: CheckOffSessionsComponent},
    {path:'coach-schedule', component: CoachScheduleComponent},
    {path:'ending-bookings', component: EndingBookingsComponent},
    {path:'search-sessions', component: SearchSessionsComponent}
 
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
