import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardItemComponent } from './page/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './page/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, DashboardItemComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
