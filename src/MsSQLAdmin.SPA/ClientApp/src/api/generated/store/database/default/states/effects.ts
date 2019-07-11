/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {DatabaseService} from '../../../../controllers/Database';
import * as actions from './actions';

@Injectable()
export class DefaultEffects {
  @Effect()
  Default = this.storeActions.pipe(
    ofType<actions.Start>(actions.Actions.START),
    switchMap(() => this.databaseService.default()
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private databaseService: DatabaseService,
  ) {}
}