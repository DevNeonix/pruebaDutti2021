import {Component, OnInit} from '@angular/core';
import {Film} from '../../core/interfaces/film';
import {FilmsService} from '../../core/services/films.service';

declare var $: any;

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  films: Array<Film>;

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.getFilms();
  }

  private getFilms() {
    this.filmsService.getFilms().subscribe(r => {
      console.log(r);
      this.films = r.results;
    });
  }

  getImage(film: Film) {
    return `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`;
  }

  toggleCharacter(episode_id: number) {
    $("#listCharacter" + episode_id).slideToggle();
  }
}
