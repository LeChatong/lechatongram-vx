import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/user/users.service';
import {APIResponse, UserModel} from '../../services/model.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  user: UserModel;
  id: number;
  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe(
      (user: APIResponse) => {
        this.user = user.data;
        console.log(this.user);
      }
    );
  }

}
