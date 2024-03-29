import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sessionCollapsed: boolean = false;
  customerCollapsed: boolean = false;
  providerCollapsed: boolean = false;
  coachCollapsed: boolean = false;
  activityCollapsed: boolean = false;
  venueCollapsed: boolean = false;
  managementCollapsed: boolean = false;

  collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSessionMenu(){
    this.sessionCollapsed = !this.sessionCollapsed;
  }
  toggleCustomerMenu(){
    this.customerCollapsed = !this.customerCollapsed;
  }
  toggleProviderMenu(){
    this.providerCollapsed = !this.providerCollapsed;
  }
  toggleCoachMenu(){
    this.coachCollapsed = !this.coachCollapsed;
  }
  toggleActivityMenu(){
    this.activityCollapsed = !this.activityCollapsed;
  }
  toggleVenueMenu(){
    this.venueCollapsed = !this.venueCollapsed;
  }
  toggleManagementMenu(){
    this.managementCollapsed = !this.managementCollapsed;
  }
  
   togglesideBar(){
    this.collapsed = !this.collapsed;
  } 

}
