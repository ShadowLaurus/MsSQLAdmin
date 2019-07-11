/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../../../controllers/Database';

@Injectable()
export class TablesFormService {
  form: FormGroup;
  constructor(
    private databaseService: DatabaseService,
  ) {
    this.form = new FormGroup({
      databaseConnectionModel: new FormGroup({
        server: new FormControl(undefined, [Validators.required]),
        database: new FormControl(undefined, []),
        username: new FormControl(undefined, []),
        password: new FormControl(undefined, []),
        isWindows: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.databaseService.tables(data);
  }
}
