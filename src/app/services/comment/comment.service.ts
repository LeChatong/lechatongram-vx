import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private dataService: DataService, private http: HttpClient) { }

  public listAllComment() {
    return this.http.get(`${this.dataService.baseUrl}/comment/list`);
  }
}
