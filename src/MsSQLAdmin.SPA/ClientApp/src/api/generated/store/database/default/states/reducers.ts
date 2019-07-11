/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface DefaultState {
  data: __model.DatabaseConnectionModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDefaultState: DefaultState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Database_Default';
export const getDefaultStateSelector = createFeatureSelector<DefaultState>(selectorName);

export function DefaultReducer(
  state: DefaultState = initialDefaultState,
  action: actions.DefaultAction): DefaultState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
