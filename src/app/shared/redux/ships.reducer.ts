import {Ship} from '../../interfaces/Ship';

// tslint:disable-next-line:class-name
export class shipsState {
  ships: Ship[];
}

const initialState: shipsState = {
  ships: [],
};


export function shipsReducer(state = initialState, action: any) {
  switch (action.type) {
    case '[Ships Component] getData':
      state = action.payload;
      return state;

    case '[Ships Component] Error':
      return null;
    default:
      return state;
  }
}
