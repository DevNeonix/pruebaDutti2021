import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SpeciesService} from '../../core/services/species.service';
import {Responseswapi} from '../../core/interfaces/responseswapi';
import {Specie} from '../../core/interfaces/specie';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  response: Responseswapi<Specie[]>;
  config: any;
  page = 1;

  constructor(private speciesService: SpeciesService) {
  }

  ngOnInit(): void {
    this.getSpecies();

  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.getSpecies(event);
    this.page = event;
  }

  getSpecies(page = 1) {
    return this.speciesService.getEspecies(page).subscribe(res => {
      this.response = res;
      this.config = {
        itemsPerPage: 10,
        currentPage: page,
        totalItems: this.response.count
      };
    });
  }

  getImage(url: string) {
    const id = url.replace('http://swapi.dev/api/species/', '').replace('/', '');
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`;
  }

}
