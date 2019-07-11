/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {DatabaseService} from '../../../controllers/Database';
import {FormsSharedModule} from '../../forms-shared.module';
import {ValidFormService} from './valid.service';

import {ValidEffects} from './states/effects';
import {ValidReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ValidReducer),
    NgrxEffectsModule.forFeature([ValidEffects]),
  ],
  providers: [
    DatabaseService,
    ValidFormService,
  ],
})
export class ValidModule {}
