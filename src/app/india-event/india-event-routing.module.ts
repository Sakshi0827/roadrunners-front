import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaEventComponent } from './india-event.component';


const indiaEventRoutes: Routes = [
    { path: "", component: IndiaEventComponent }
];

@NgModule({
  imports: [RouterModule.forChild(indiaEventRoutes)],
  exports: [RouterModule]
})
export class IndiaEventRoutingModule { }
