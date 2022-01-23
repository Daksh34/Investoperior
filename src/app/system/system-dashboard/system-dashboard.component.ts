import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var AdminDashboardPageLoad: any
declare var MenuSetup: any
@Component({
  selector: 'app-system-dashboard',
  templateUrl: './system-dashboard.component.html',
  styleUrls: ['./system-dashboard.component.css']
})
export class SystemDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    MenuSetup();
    AdminDashboardPageLoad();
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

}
