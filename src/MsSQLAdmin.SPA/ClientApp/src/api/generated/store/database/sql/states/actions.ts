/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {SqlParams} from '../../../../controllers/Database';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Database sql] Start',
  SUCCESS = '[Database sql] Success',
  ERROR = '[Database sql] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: SqlParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.TableViewModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type SqlAction = Start | Success | Error;
