/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {TablesParams} from '../../../../controllers/Database';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Database tables] Start',
  SUCCESS = '[Database tables] Success',
  ERROR = '[Database tables] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: TablesParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.TableListModel[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type TablesAction = Start | Success | Error;