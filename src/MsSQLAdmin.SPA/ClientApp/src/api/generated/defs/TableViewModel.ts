/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined
 */

import * as __model from '../model';

export interface TableViewModel {
  tableColumns?: __model.TableColumnModel[];
  tableData?: object[];
  /** format: int64 */
  ddlResult?: number;
  errorMessage?: string;
}
