import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'https://swapi.dev/api/person/';
  headerDict = {
    // Authorization: 'none',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    "Allow": "GET, HEAD, OPTIONS"
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {
  }

  getPerson(url): Observable<any> {
    return this.http.get(url);
  }
}
