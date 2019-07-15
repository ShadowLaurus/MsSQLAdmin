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
import {DatabasesFormService} from './databases.service';

import {DatabasesEffects} from './states/effects';
import {DatabasesReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, DatabasesReducer),
    NgrxEffectsModule.forFeature([DatabasesEffects]),
  ],
  providers: [
    DatabaseService,
    DatabasesFormService,
  ],
})
export class DatabasesModule {}
