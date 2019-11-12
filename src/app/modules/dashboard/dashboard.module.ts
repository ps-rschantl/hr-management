import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
