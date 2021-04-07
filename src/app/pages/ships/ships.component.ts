import {Component, OnInit} from '@angular/core';
import {ShipsService} from 'src/app/services/ships.service';
import {Store} from '@ngrx/store';
import {ResponseShips} from '../../interfaces/Ships';
import {setData, clearData} from './ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  private ships$;

  constructor(
    private shipsService: ShipsService,
    private store: Store<{ ships: ResponseShips }>
  ) {
    this.ships$ = store.select('ships');
  }

  ngOnInit(): void {

    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList);
    });
  }
}
