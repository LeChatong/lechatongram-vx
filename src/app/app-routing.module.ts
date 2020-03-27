import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthService} from "./services/auth.service";


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent, canLoad: [!AuthService]},
  {path: 'dashboard', component: DashboardComponent, canLoad: [AuthService]},
  {path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'movie', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
