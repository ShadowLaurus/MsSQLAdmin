/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {TableParams} from '../../../../controllers/Database';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Database table] Start',
  SUCCESS = '[Database table] Success',
  ERROR = '[Database table] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: TableParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.TableColumnModel[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type TableAction = Start | Success | Error;
