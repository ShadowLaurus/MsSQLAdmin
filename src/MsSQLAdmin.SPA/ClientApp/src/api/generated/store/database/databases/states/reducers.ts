/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface DatabasesState {
  data: __model.DatabaseModel[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDatabasesState: DatabasesState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Database_Databases';
export const getDatabasesStateSelector = createFeatureSelector<DatabasesState>(selectorName);

export function DatabasesReducer(
  state: DatabasesState = initialDatabasesState,
  action: actions.DatabasesAction): DatabasesState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
