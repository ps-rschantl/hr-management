import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
    this.router.navigateByUrl('dashboard');
  }
}
