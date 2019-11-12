import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class AuthGuard implements CanActivate {
  loggedIn = true;

  constructor(private router: Router) {
    // this._store
    //   .select((state) => state.authReducer)
    //   .subscribe((res) => {
    //     this.loggedIn = res.login;
    //     this.maybeLogout();
    //   });
  }

  canActivate(): boolean {
    console.log('canActivate');
    this.maybeLogout();
    return this.loggedIn;
  }

  maybeLogout(): void {
    if (!this.loggedIn) {
      this.router.navigateByUrl('login');
    }
  }
}
