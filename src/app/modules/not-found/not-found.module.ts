import { NotFoundRoutingModule } from './not-found.routing.module';
import { NotFoundComponent } from './page/not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
