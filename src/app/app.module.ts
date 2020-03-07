import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UsersModule} from './users/users.module';
import {UsersServices} from './services/users.services';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [AuthService, DataService, UsersServices],
  bootstrap: [AppComponent]
})


export class AppModule { }