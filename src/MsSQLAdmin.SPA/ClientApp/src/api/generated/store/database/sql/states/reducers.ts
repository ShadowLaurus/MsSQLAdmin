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

export interface SqlState {
  data: __model.TableViewModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialSqlState: SqlState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Database_Sql';
export const getSqlStateSelector = createFeatureSelector<SqlState>(selectorName);

export function SqlReducer(
  state: SqlState = initialSqlState,
  action: actions.SqlAction): SqlState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
