/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

export interface TableColumnModel {
  name?: string;
  type?: string;
  /** format: int32 */
  maxLength?: number;
  /** format: int32 */
  precision?: number;
  /** format: int32 */
  scale?: number;
  isNullable?: boolean;
  isPrimaryKey?: boolean;
}
