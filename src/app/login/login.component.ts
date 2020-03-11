import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Login, APIResponse, UserModel} from '../services/model.service';
import {HttpResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

declare var showLoader;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login;
  headers: HttpHeaders;
  authStatus: boolean;
  message: string;


  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {
    this.initView();
    this.headers = new HttpHeaders();
    this.message = '';
  }

  initView() {
    this.login = {} as Login;
  }
  ngOnInit() {

  }

  onSignIn() {
    showLoader(true);
    this.authService.signIn(this.login)
      .subscribe(
        (user: APIResponse) => {
          console.log(user.data);
          localStorage.setItem('CURRENT_USER', JSON.stringify(user.data));
          this.authService.currentUserSubject.next(user.data);
          showLoader(false);
          this.router.navigate(['user/home']);
        },
        error1 => {
          showLoader(false);
          this.message = 'Erreur Serveur !';
          //location.reload();
        }
      );

  }

  onSignOut() {
    this.authService.signOut();
  }

}
