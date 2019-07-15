/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {DatabasesParams} from '../../../../controllers/Database';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Database databases] Start',
  SUCCESS = '[Database databases] Success',
  ERROR = '[Database databases] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: DatabasesParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.DatabaseModel[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type DatabasesAction = Start | Success | Error;
