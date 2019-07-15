/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {DatabaseService} from '../../../controllers/Database';
import {FormsSharedModule} from '../../forms-shared.module';
import {TableFormService} from './table.service';

import {TableEffects} from './states/effects';
import {TableReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, TableReducer),
    NgrxEffectsModule.forFeature([TableEffects]),
  ],
  providers: [
    DatabaseService,
    TableFormService,
  ],
})
export class TableModule {}
