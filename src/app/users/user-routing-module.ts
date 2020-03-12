import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {ListUserComponent} from './list-user/list-user.component';

const routes: Routes = [
  {path : 'user/home', component : DashboardComponent},
  {path : 'user/list', component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {

}
