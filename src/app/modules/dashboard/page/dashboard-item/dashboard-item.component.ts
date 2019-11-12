import { Component, Input, OnInit } from '@angular/core';
import { DashboardItem } from 'src/app/shared/models/dashboard-item';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit {
  @Input() item: DashboardItem;

  constructor() {}

  ngOnInit() {}
}
