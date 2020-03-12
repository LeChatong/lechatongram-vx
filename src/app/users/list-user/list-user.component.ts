import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/user/users.service';
import {APIResponse, UserModel} from '../../services/model.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUser: Array<UserModel>;
  constructor(private userService: UsersService) {
    this.initView();
  }

  ngOnInit() {
  }

  initView() {
    this.getListUser();
  }

  getListUser() {
    this.userService.listAllUsers().subscribe(
      (users: APIResponse) => {
        this.listUser = users.data;
      }
    );
  }
}
