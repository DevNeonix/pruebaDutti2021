import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseShips} from "../interfaces/Ships";

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
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {
  }

  getShips(): Observable<any> {
    return this.http.get(this.url, this.requestOptions);
  }
}
