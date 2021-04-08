import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url = 'https://swapi.dev/api/starships/';
  headerDict = {
    // Authorization: 'none',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };


  constructor(private http: HttpClient) {
  }

  getShips(page): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders(this.headerDict),
      params: {
        page: page
      }
    };
    return this.http.get(this.url, requestOptions);
  }
}
