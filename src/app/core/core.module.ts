import { HeaderComponent } from './components/header/header.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthGuard } from './guard/auth.guard';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuthLayoutComponent, ContentLayoutComponent, HeaderComponent, SidenavComponent],
  imports: [SharedModule, AppRoutingModule],
  providers: [AuthGuard],
})
export class CoreModule {}
