/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {SqlFormatService} from '../../../controllers/SqlFormat';
import {FormsSharedModule} from '../../forms-shared.module';
import {FormattsqlFormService} from './formattsql.service';

import {FormattsqlEffects} from './states/effects';
import {FormattsqlReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, FormattsqlReducer),
    NgrxEffectsModule.forFeature([FormattsqlEffects]),
  ],
  providers: [
    SqlFormatService,
    FormattsqlFormService,
  ],
})
export class FormattsqlModule {}
