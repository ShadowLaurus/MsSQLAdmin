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
import {FormattsqlwithoptionsFormService} from './formattsqlwithoptions.service';

import {FormattsqlwithoptionsEffects} from './states/effects';
import {FormattsqlwithoptionsReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, FormattsqlwithoptionsReducer),
    NgrxEffectsModule.forFeature([FormattsqlwithoptionsEffects]),
  ],
  providers: [
    SqlFormatService,
    FormattsqlwithoptionsFormService,
  ],
})
export class FormattsqlwithoptionsModule {}
