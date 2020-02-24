import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiaEventListComponent } from './india-event-list/india-event-list.component';
import { IndiaEventComponent } from './india-event.component';
import { IndiaEventDetailComponent } from './india-event-detail/india-event-detail.component';



@NgModule({
  declarations: [IndiaEventListComponent, IndiaEventComponent, IndiaEventDetailComponent],
  imports: [
    CommonModule
  ]
})
export class IndiaEventModule { }
