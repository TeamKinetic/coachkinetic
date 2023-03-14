import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {

calendarOptions: CalendarOptions = {
   
initialView: 'dayGridMonth',

weekends: true, // initial value

plugins: [dayGridPlugin],
    
events: [
      { title: 'Meeting 1', start: new Date() },
      { title: 'event 2', start: new Date()}
    ] 
  };


/* toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  } */

 
}
