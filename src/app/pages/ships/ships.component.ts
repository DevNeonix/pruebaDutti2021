import {Component, OnInit} from '@angular/core';
import {ShipsService} from 'src/app/core/services/ships.service';
import {Store} from '@ngrx/store';
import {shipsState} from '../../shared/redux/ships.reducer';
import {GetData, GetDataError} from '../../shared/redux/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor(
    private shipsService: ShipsService,
    private store: Store<{ ships: shipsState }>
  ) {
    this.store.select('ships').subscribe(state => {
      console.log('store', state);
    });

  }

  ngOnInit(): void {

    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      const action = new GetData(ships);
      this.store.dispatch(action);
    }, (error: any) => {
      const action = new GetDataError();
      this.store.dispatch(action);
    });
  }
}
