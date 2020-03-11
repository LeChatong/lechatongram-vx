import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private dataService: DataService, private http: HttpClient) { }

  public listAllMember() {
    return this.http.get(`${this.dataService.baseUrl}/member/list`);
  }
}
