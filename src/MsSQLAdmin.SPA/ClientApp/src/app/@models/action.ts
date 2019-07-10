import { ActionTypes } from '../services/action-types.enum';

export interface Action {
  type: ActionTypes;
  payload: any;
  result?: any;
}
