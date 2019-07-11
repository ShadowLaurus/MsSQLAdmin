/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ValidParams} from '../../../../controllers/Database';

export enum Actions {
  START = '[Database valid] Start',
  SUCCESS = '[Database valid] Success',
  ERROR = '[Database valid] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ValidParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: boolean) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type ValidAction = Start | Success | Error;
