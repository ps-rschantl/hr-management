import { Component, Renderer2 } from '@angular/core';

const THEMES = {
  default: 'default-theme',
  dark: 'dark-theme',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HR Management';
  avticeTheme = THEMES.default;

  constructor(private renderer: Renderer2) {}

  onToggleTheme() {
    this.renderer.removeClass(document.body, this.avticeTheme);
    this.avticeTheme = this.avticeTheme === THEMES.default ? THEMES.dark : THEMES.default;
    this.renderer.addClass(document.body, this.avticeTheme);
  }
}
