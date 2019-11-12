import { Component, Input, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

const THEMES = {
  default: 'default-theme',
  dark: 'dark-theme',
};

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  title = 'HR Management';
  avticeTheme = THEMES.default;

  @Input() sideNav: MatSidenav;

  constructor(private renderer: Renderer2) {}

  onToggleTheme() {
    this.renderer.removeClass(document.body, this.avticeTheme);
    this.avticeTheme = this.avticeTheme === THEMES.default ? THEMES.dark : THEMES.default;
    this.renderer.addClass(document.body, this.avticeTheme);
  }
}
