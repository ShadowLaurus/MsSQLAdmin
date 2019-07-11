/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface FormattsqlwithoptionsState {
  data: string | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialFormattsqlwithoptionsState: FormattsqlwithoptionsState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'SqlFormat_Formattsqlwithoptions';
export const getFormattsqlwithoptionsStateSelector = createFeatureSelector<FormattsqlwithoptionsState>(selectorName);

export function FormattsqlwithoptionsReducer(
  state: FormattsqlwithoptionsState = initialFormattsqlwithoptionsState,
  action: actions.FormattsqlwithoptionsAction): FormattsqlwithoptionsState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
