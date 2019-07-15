/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Info info] Start',
  SUCCESS = '[Info info] Success',
  ERROR = '[Info info] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.AppSettings) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type InfoAction = Start | Success | Error;
