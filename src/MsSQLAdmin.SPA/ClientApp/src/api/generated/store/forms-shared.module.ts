/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class FormsSharedModule {}
