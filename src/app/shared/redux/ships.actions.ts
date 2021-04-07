import {Action, createAction} from '@ngrx/store';

export const getData = createAction('[Ships Component] getData');
export const getDataError = createAction('[Ships Component] Error');

export enum ShipsActionTypes {
  GET_DATA = '[Ships Component] getData',
  GET_DATA_ERROR = '[Ships Component] Error',
}

export class GetData implements Action {
  readonly type = ShipsActionTypes.GET_DATA;

  constructor(public payload = []) {
  }
}


export class GetDataError implements Action {
  readonly type = ShipsActionTypes.GET_DATA_ERROR;
}
