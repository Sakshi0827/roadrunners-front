import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaEventComponent } from './india-event.component';
import { IndiaEventListComponent } from './india-event-list/india-event-list.component';
import { IndiaEventDetailComponent } from './india-event-detail/india-event-detail.component';


const indiaEventRoutes: Routes = [
    { 
        path: "", 
        component: IndiaEventComponent,
        children: [
            {
              path: '',
              component: IndiaEventListComponent
            },
            {
              path: 'detail',
              component: IndiaEventDetailComponent
            }
          ]   
    }
];

@NgModule({
  imports: [RouterModule.forChild(indiaEventRoutes)],
  exports: [RouterModule]
})
export class IndiaEventRoutingModule { }
