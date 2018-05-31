import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDetailsComponent } from './leave-details/leave-details.component'
import { LeaveCompleteDetailsComponent } from './leave-complete-details/leave-complete-details.component';

const routes : Routes = [
  { path: 'leaveList', component: LeaveDetailsComponent }, 
  { path: '', redirectTo: '/leaveList', pathMatch: 'full' },
  { path: 'leave-complete-detail/:id' , component : LeaveCompleteDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { 

}

