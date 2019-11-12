import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = '';
  @Input() particlesIcon = '';
  @Input() sideNav: MatSidenav;

  @Output() toggleTheme: EventEmitter<void> = new EventEmitter();
  @Output() toggleParticles: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onToggleTheme() {
    this.toggleTheme.emit();
  }

  onToggleParticles() {
    this.toggleParticles.emit();
  }
}
