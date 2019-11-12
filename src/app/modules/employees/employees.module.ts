import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
