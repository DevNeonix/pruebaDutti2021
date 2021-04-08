import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../core/interfaces/character';
import {CharacterService} from '../../core/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() urlcharacter: string;
  character: Character;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.characterService.getPerson(this.urlcharacter).subscribe(res => {
      this.character = res;
    });
  }

  getImg(): String {
    const id = this.urlcharacter.replace('http://swapi.dev/api/people/', '');
    return 'https://starwars-visualguide.com/assets/img/characters/' + id.replace('/', '') + '.jpg';
  }
}
