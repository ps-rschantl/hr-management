import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login() {
    console.log('AuthService - login');
    return true;
  }
}
