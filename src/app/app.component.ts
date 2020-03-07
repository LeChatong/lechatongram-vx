import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {UserModel} from './services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lechatongram-vx';

  isLogin = false;
  CURRENT_USER: UserModel;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(x => this.CURRENT_USER = x);

    if (this.CURRENT_USER) {
      router.navigate(['user/home']);
    } else {
      router.navigate(['login']);
    }
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.urlAfterRedirects === '/login') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    });
  }

  ngOnInit() {}
}
