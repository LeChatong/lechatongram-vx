import {Injectable} from "@angular/core";
import {APIResponse, UserModel} from "./model.service";
import {stringify} from "querystring";
import {JsonFormatter} from "tslint/lib/formatters";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import { map } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {DataService} from "./data.service";

@Injectable()
export class AuthService implements CanLoad, CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return undefined;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(this.currentUserValue === null){
      return false;
    }else{
      return true;
    }
  }
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private dataService : DataService){
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('CURRENT_USER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
        return this.currentUserSubject.getValue();
  }

  signIn(username, email) {
    return this.dataService.get(`/user/find/${username}/${email}`)
      .pipe(
        map(user => {
          localStorage.setItem('CURRENT_USER', JSON.stringify(user));
          this.currentUserSubject.next((user));
          return user;
        })
      );

  }

  signOut() {
    localStorage.removeItem('CURRENT_USER');
    this.currentUserSubject.next(null);
  }

}
