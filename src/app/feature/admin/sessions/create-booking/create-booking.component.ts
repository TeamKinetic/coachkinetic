import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  showIndividualSession: boolean=true;
  showRepeatingSession: boolean=true;


constructor() { }

  ngOnInit(): void {
  }

  toggleIndividualSession(){
 this.showIndividualSession = !this.showIndividualSession;
  }

  toggleRepeatingSession(){
    this.showRepeatingSession = !this.showRepeatingSession;
  }

}
