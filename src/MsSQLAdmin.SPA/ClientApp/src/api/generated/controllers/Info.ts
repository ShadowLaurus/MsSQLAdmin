/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

@Injectable()
export class InfoService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Info/GetSettings */
  info(): Observable<__model.AppSettings> {
    return this.http.get<__model.AppSettings>(`/swagger/api/info`);
  }
}
