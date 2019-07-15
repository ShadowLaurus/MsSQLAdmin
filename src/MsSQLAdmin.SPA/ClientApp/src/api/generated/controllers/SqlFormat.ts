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

export interface FormattsqlParams {
  model?: __model.FormatTSqlModel;
}

export interface FormattsqlwithoptionsParams {
  model?: __model.FormatTSqlModel;
}

@Injectable()
export class SqlFormatService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/SqlFormat/FormatTSql */
  formattsql(params: FormattsqlParams): Observable<string> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<string>(`/swagger/api/sqlformat/formattsql`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/SqlFormat/FormatTSqlWithOptions */
  formattsqlwithoptions(params: FormattsqlwithoptionsParams): Observable<string> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<string>(`/swagger/api/sqlformat/formattsqlwithoptions`, bodyParamsWithoutUndefined);
  }
}
