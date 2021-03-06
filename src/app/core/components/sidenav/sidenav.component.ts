import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  routes = [
    { route: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { route: '/employees', title: 'Employees', icon: 'people' },
    { route: '/projects', title: 'Projects', icon: 'folder' },
  ];

  @Input() sideNav: MatSidenav;

  logout() {
    console.log('logout');
    this.sideNav.close();
  }
}
