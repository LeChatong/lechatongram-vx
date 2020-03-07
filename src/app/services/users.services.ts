import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {UserModel} from './model.service';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class UsersServices {

  constructor(private dataService: DataService, private http: HttpClient) {}

  public listAllUsers() {
    return this.http.get(`${this.dataService.baseUrl}/user/list`);
  }
}
