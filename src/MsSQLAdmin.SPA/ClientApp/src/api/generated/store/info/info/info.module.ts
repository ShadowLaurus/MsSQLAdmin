/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {InfoService} from '../../../controllers/Info';
import {FormsSharedModule} from '../../forms-shared.module';

import {InfoEffects} from './states/effects';
import {InfoReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, InfoReducer),
    NgrxEffectsModule.forFeature([InfoEffects]),
  ],
  providers: [
    InfoService,
  ],
})
export class InfoModule {}
