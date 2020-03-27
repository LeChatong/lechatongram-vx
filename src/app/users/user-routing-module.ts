import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {ListUserComponent} from './list-user/list-user.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';

const routes: Routes = [
  {path : 'user/home', component : DashboardComponent},
  {path : 'user/list', component: ListUserComponent},
  {path : 'user/profile/:id', component: ProfileUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {

}
