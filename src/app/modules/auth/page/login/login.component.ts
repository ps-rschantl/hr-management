import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['testuser', Validators.required],
    password: ['1111', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
    if (this.authService.login()) {
      this.router.navigateByUrl('dashboard');
    }
  }
}
