import { Component, OnInit } from '@angular/core';
import { DashboardItem } from 'src/app/shared/models/dashboard-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: Array<DashboardItem> = [
    { title: 'Employees', routerLink: '/employees', icon: 'people' },
    { title: 'Projects', routerLink: '/projects', icon: 'folder' },
  ];

  constructor() {}

  ngOnInit() {}
}
