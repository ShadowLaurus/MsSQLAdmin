/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface ValidState {
  data: boolean | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialValidState: ValidState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Database_Valid';
export const getValidStateSelector = createFeatureSelector<ValidState>(selectorName);

export function ValidReducer(
  state: ValidState = initialValidState,
  action: actions.ValidAction): ValidState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
