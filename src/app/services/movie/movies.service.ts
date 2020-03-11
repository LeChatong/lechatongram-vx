import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private dataService: DataService, private http: HttpClient) { }

  public getAllMovies() {
    return this.http.get(`${this.dataService.baseUrl}/movie/list`);
  }
}
