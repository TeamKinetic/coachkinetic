import { Component} from '@angular/core';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular/public-api';

@Component({
  selector: 'app-coach-schedule',
  templateUrl: './coach-schedule.component.html',
  styleUrls: ['./coach-schedule.component.css']
})
export class CoachScheduleComponent  {

  config: DayPilot.SchedulerConfig = {
    timeHeaders: [
      { groupBy: "Month", format:"MMMM yyyy"},
      { groupBy: "Day", format: "d"}
    ],
    scale: "Day",
    //start: "2023-03-01" ,
    days: 30,
    resources:[
      {name:"Barry", id:"1"},
      {name:"Chris", id:"2"},
      {name:"Shamima", id:"3"}
    ]
  }

  events!:[
    {id:1, start:"2023-03-21", 
    end:"2023-03-24",
    resource:"1",
    text:"Event 1"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
