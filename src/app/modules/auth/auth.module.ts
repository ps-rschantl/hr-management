import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './page/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
