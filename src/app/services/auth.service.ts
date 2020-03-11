import {Injectable} from '@angular/core';
import {APIResponse, Login, UserModel} from './model.service';
import {stringify} from 'querystring';
import {JsonFormatter} from 'tslint/lib/formatters';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable()
export class AuthService implements CanLoad {

  constructor(private dataService: DataService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('CURRENT_USER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
        return this.currentUserSubject.getValue();
  }
  public currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;


  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.currentUserValue === null) {
      return false;
    } else {
      return true;
    }
  }

  signIn(login: Login) {
    const params = new HttpParams().set('username', login.username).set('email', login.email)
    return this.http.post(`${this.dataService.baseUrl}/user/login`, params);

  }

  signOut() {
    localStorage.removeItem('CURRENT_USER');
    this.currentUserSubject.next(null);
  }

}
