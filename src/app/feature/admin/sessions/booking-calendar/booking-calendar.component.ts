import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';




@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {

calendarOptions: CalendarOptions = {

plugins: [dayGridPlugin, interactionPlugin],

initialView: 'dayGridMonth',

weekends: true, // initial value

    
events: [
      { title: 'Meeting 1', start: new Date() },
      { title: 'event 2', start: new Date()}
    ] 
  };


/* toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  } */

 
}
