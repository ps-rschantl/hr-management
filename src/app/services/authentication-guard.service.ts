import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {
  loggedIn = false;

  constructor(/*private _store: Store<any>,*/ private router: Router) {
    // this._store
    //   .select((state) => state.authReducer)
    //   .subscribe((res) => {
    //     this.loggedIn = res.login;
    //     this.maybeLogout();
    //   });
  }

  canActivate(): boolean {
    // this.maybeLogout();
    return true;
  }

  maybeLogout(): void {
    if (!this.loggedIn) {
      this.router.navigateByUrl('login');
    }
  }
}
