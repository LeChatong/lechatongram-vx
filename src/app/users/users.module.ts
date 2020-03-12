import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserRoutingModule} from './user-routing-module';
import { ListUserComponent } from './list-user/list-user.component';



@NgModule({
  declarations: [DashboardComponent, ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
