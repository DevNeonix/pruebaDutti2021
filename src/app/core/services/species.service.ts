import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Responseswapi} from '../interfaces/responseswapi';
import {Specie} from '../interfaces/specie';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) {
  }

  getEspecies(page): Observable<Responseswapi<Specie[]>> {
    // @ts-ignore
    return this.http.get(`https://swapi.dev/api/species`, {
      params: {
        page
      }
    });
  }

}
