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

export interface ValidParams {
  model?: __model.DatabaseConnectionModel;
}

export interface DatabasesParams {
  model?: __model.DatabaseConnectionModel;
}

export interface TablesParams {
  databaseConnectionModel?: __model.DatabaseConnectionModel;
}

export interface TableParams {
  databaseConnectionModel?: __model.DatabaseConnectionModel;
  table: string;
}

export interface SqlParams {
  databaseConnectionModel?: __model.DatabaseConnectionModel;
  sql?: string;
  serveur: string;
}

@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Database/GetDefaultConnection */
  default(): Observable<__model.DatabaseConnectionModel> {
    return this.http.get<__model.DatabaseConnectionModel>(`/swagger/api/database/default`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Database/ValidConnection */
  valid(params: ValidParams): Observable<boolean> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<boolean>(`/swagger/api/database/valid`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Database/Index */
  databases(params: DatabasesParams): Observable<__model.DatabaseModel[]> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.DatabaseModel[]>(`/swagger/api/database/databases`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Database/Tables */
  tables(params: TablesParams): Observable<__model.TableListModel[]> {
    const bodyParams = params.databaseConnectionModel;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.TableListModel[]>(`/swagger/api/database/tables`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Database/Table */
  table(params: TableParams): Observable<__model.TableColumnModel[]> {
    const bodyParams = params.databaseConnectionModel;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    const pathParams = {
      table: params.table,
    };
    return this.http.post<__model.TableColumnModel[]>(`/swagger/api/database/tables/${pathParams.table}`, bodyParamsWithoutUndefined);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Database/Data */
  sql(params: SqlParams): Observable<__model.TableViewModel> {
    const bodyParams = params.databaseConnectionModel;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    const formDataParams = {
      sql: params.sql,
    };
    const pathParams = {
      serveur: params.serveur,
    };
    return this.http.post<__model.TableViewModel>(`/swagger/api/database/${pathParams.serveur}/sql`, bodyParamsWithoutUndefined);
  }
}
