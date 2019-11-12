import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  title = 'Oops! 404';
  redirectTimerInterval = 1000;
  redirectTimerSeconds = 3;

  constructor(private router: Router) {}

  ngOnInit() {
    this.redirect();
  }

  redirect() {
    const seconds = this.redirectTimerSeconds;

    const intervalId = setInterval(() => {
      this.redirectTimerSeconds--;
      if (this.redirectTimerSeconds === 0) {
        clearInterval(intervalId);
        this.redirectTimerSeconds = seconds;
        this.router.navigate(['login']);
      }
    }, this.redirectTimerInterval);
  }
}
