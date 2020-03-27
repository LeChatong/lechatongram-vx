import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserRoutingModule} from './user-routing-module';
import { ListUserComponent } from './list-user/list-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent, ListUserComponent, ProfileUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
