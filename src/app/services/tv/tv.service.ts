import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private dataService: DataService, private http: HttpClient) { }

  public listAllTv() {
    return this.http.get(`${this.dataService.baseUrl}/tv/list`);
  }
  public listAllTvAv() {
    return this.http.get(`${this.dataService.baseUrl}/tv/avaible`);
  }
}
