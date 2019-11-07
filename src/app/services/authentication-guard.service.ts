import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router) {
    console.log('AuthenticationGuardService - constructor');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthenticationGuardService - canActivate');
    // if (this.userService.isValid()) {
    // return true;
    // } else {
    this.router.navigate(['/login'], {
      queryParams: {
        return: state.url,
      },
    });
    return false;
    // }
  }
}
