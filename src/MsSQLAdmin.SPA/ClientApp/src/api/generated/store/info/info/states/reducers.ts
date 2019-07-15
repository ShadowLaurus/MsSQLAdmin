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

export interface InfoState {
  data: __model.AppSettings | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialInfoState: InfoState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Info_Info';
export const getInfoStateSelector = createFeatureSelector<InfoState>(selectorName);

export function InfoReducer(
  state: InfoState = initialInfoState,
  action: actions.InfoAction): InfoState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
