import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglesideBar(){
    this.collapsed = !this.collapsed;
  }

}
