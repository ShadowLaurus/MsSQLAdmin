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
import {TablesFormService} from './tables.service';

import {TablesEffects} from './states/effects';
import {TablesReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, TablesReducer),
    NgrxEffectsModule.forFeature([TablesEffects]),
  ],
  providers: [
    DatabaseService,
    TablesFormService,
  ],
})
export class TablesModule {}
