import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

declare var Particles: any;

const THEMES = {
  default: { class: 'default-theme', particlesColor: '#000000' },
  dark: { class: 'dark-theme', particlesColor: '#FFFFFF' },
};

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  title = 'HR Management';
  avticeTheme = THEMES.default;
  particles: any;

  @Input() sideNav: MatSidenav;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initParticles();
  }

  onToggleTheme() {
    this.renderer.removeClass(document.body, this.avticeTheme.class);
    this.avticeTheme =
      this.avticeTheme.class === THEMES.default.class ? THEMES.dark : THEMES.default;
    this.renderer.addClass(document.body, this.avticeTheme.class);

    this.initParticles();
  }

  initParticles() {
    if (this.particles) {
      this.particles.destroy();
    }

    const background = this.renderer.createElement('canvas');
    this.renderer.addClass(background, 'background');
    this.renderer.appendChild(document.body, background);

    this.particles = Particles.init({
      selector: '.background',
      color: this.avticeTheme.particlesColor,
    });
  }
}
