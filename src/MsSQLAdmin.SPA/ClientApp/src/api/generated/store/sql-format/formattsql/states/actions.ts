/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {FormattsqlParams} from '../../../../controllers/SqlFormat';

export enum Actions {
  START = '[SqlFormat formattsql] Start',
  SUCCESS = '[SqlFormat formattsql] Success',
  ERROR = '[SqlFormat formattsql] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: FormattsqlParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: string) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type FormattsqlAction = Start | Success | Error;
