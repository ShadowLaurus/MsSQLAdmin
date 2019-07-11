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

import {DefaultEffects} from './states/effects';
import {DefaultReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, DefaultReducer),
    NgrxEffectsModule.forFeature([DefaultEffects]),
  ],
  providers: [
    DatabaseService,
  ],
})
export class DefaultModule {}
