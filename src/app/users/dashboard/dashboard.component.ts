import { Component, OnInit } from '@angular/core';
import {APIResponse, UserModel} from '../../services/model.service';
import {DataService} from '../../services/data.service';
import {HttpResponse} from '@angular/common/http';
import {UsersServices} from '../../services/users.services';
import {of} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listUser: Array<UserModel>;
  nbUser: number;
  constructor(private dataService: DataService, private userService: UsersServices) {
    this.initView();
  }

  ngOnInit() {
  }

  initView() {
    this.listUser = new Array<UserModel>();
    this.getListUser();
  }
  getListUser() {
    this.userService.listAllUsers().subscribe(
      (users: Array<UserModel>) => {
        this.listUser = users;
      }
    );
  }

}
