import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Responseswapi} from '../interfaces/responseswapi';
import {Film} from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url = 'https://swapi.dev/api/films/';
  headerDict = {
    'Content-Type': 'application/json'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<Responseswapi<Array<Film>>> {
    // @ts-ignore
    return this.http.get(this.url, this.requestOptions);
  }
}
