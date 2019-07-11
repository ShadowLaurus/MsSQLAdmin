/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Database default] Start',
  SUCCESS = '[Database default] Success',
  ERROR = '[Database default] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.DatabaseConnectionModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type DefaultAction = Start | Success | Error;
