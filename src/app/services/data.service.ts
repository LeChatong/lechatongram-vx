import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  public baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  /**
     * Function to send get request.
     * @param url
     */
    public get(url: string, options?: HttpHeaders): Observable<any> {
        return this.http.get(`${this.baseUrl}${url}`, { observe: 'response', responseType: 'text' });
    }

    /**
     * Function to send post request
     * @param url
     * @param data
     * @param options
     */
    public post(url: string, data: any, options?: HttpHeaders): Observable<any> {
        return this.http.post(`${this.baseUrl}${url}`, data, { observe: 'response', responseType: 'text' });
    }

    /**
     * Function to send put request
     * @param url
     * @param data
     */
    public put(url: string, data: any, options?: HttpHeaders): Observable<any> {
        return this.http.put(`${this.baseUrl}${url}`, data, { observe: 'response', responseType: 'text' });
    }

    /**
     * Function to send put request which will delete an element
     * @param url
     * @param data
     */
    public archive(url: string, data: any, options?: HttpHeaders): Observable<any> {
        return this.http.put(`${this.baseUrl}${url}`, data, { observe: 'response', responseType: 'text' });
    }

    /**
     * Function to send delete request
     * @param url
     */
    public delete(url: string, options?: HttpHeaders): Observable<any> {
        return this.http.delete(`${this.baseUrl}${url}`, { observe: 'response', responseType: 'text' });
    }


}
