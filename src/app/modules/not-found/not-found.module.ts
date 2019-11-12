import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
