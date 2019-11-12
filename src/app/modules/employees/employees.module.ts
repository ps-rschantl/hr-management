import { EmployeesRoutingModule } from './employees.routing';
import { EmployeesComponent } from './page/employees.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
