import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {UserModel} from '../services/model.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  CURRENT_USER: any;
  user = {} as  UserModel;
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {
    this.CURRENT_USER = this.authService.currentUserValue;
    this.user = this.CURRENT_USER as UserModel;
    // this.router.navigate(['user/home']);
  }

  ngOnInit() {

  }

  logout(){
    this.authService.signOut();
    this.router.navigate(['login']);
  }
}
