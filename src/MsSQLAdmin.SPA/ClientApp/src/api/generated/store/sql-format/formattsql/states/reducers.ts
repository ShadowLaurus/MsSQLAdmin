/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface FormattsqlState {
  data: string | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialFormattsqlState: FormattsqlState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'SqlFormat_Formattsql';
export const getFormattsqlStateSelector = createFeatureSelector<FormattsqlState>(selectorName);

export function FormattsqlReducer(
  state: FormattsqlState = initialFormattsqlState,
  action: actions.FormattsqlAction): FormattsqlState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
