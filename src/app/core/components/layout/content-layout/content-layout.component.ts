import { Component, Input, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

declare var Particles: any;

const THEMES = {
  default: { class: 'default-theme', particlesColor: '#000000' },
  dark: { class: 'dark-theme', particlesColor: '#FFFFFF' },
};

const PARTICLES_ICONS = {
  on: 'blur_on',
  off: 'blur_off',
};

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  title = 'HR Management';
  avticeTheme = THEMES.default;
  particlesIcon = PARTICLES_ICONS.off;
  particles: any;

  @Input() sideNav: MatSidenav;

  constructor(private renderer: Renderer2) {}

  onToggleTheme() {
    this.renderer.removeClass(document.body, this.avticeTheme.class);
    this.avticeTheme =
      this.avticeTheme.class === THEMES.default.class ? THEMES.dark : THEMES.default;
    this.renderer.addClass(document.body, this.avticeTheme.class);

    if (this.particlesIcon === PARTICLES_ICONS.on) {
      this.destroyParticles();
      this.initParticles();
    }
  }

  onToggleParticles() {
    if (this.particlesIcon === PARTICLES_ICONS.off) {
      this.particlesIcon = PARTICLES_ICONS.on;
      this.initParticles();
    } else {
      this.particlesIcon = PARTICLES_ICONS.off;
      this.destroyParticles();
    }
  }

  initParticles() {
    if (!this.particles) {
      const background = this.renderer.createElement('canvas');
      this.renderer.addClass(background, 'background');
      this.renderer.appendChild(document.body, background);

      this.particles = Particles.init({
        selector: '.background',
        color: this.avticeTheme.particlesColor,
      });
    }
  }

  destroyParticles() {
    if (this.particles) {
      this.particles.destroy();
      this.particles = undefined;
    }
  }
}
