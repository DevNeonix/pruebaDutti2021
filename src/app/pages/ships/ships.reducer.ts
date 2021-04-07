import {Action, createReducer, on, State} from '@ngrx/store';
import {setData, clearData} from './ships.actions';
import {ResponseShips} from '../../interfaces/Ships';

export const initialState: ResponseShips = null;

const _shipsReducer = createReducer(
  initialState,
  on(setData, (state, action) => {
    return state;
  }),
  on(clearData, () => {
    return null;
  }),
);


export function shipsReducer(state: State<ResponseShips> | null, action: Action) {
  return _shipsReducer(state, action);
}
