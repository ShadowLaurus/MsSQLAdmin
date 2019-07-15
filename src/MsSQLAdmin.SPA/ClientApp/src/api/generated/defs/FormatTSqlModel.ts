/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

export interface FormatTSqlModel {
  inputString?: string;
  reFormat?: boolean;
  indent?: string;
  /** format: int32 */
  spacesPerTab?: number;
  /** format: int32 */
  maxLineWidth?: number;
  /** format: int32 */
  statementBreaks?: number;
  /** format: int32 */
  clauseBreaks?: number;
  expandCommaLists?: boolean;
  trailingCommas?: boolean;
  spaceAfterExpandedComma?: boolean;
  expandBooleanExpressions?: boolean;
  expandCaseStatements?: boolean;
  expandBetweenConditions?: boolean;
  breakJoinOnSections?: boolean;
  uppercaseKeywords?: boolean;
  coloring?: boolean;
  keywordStandardization?: boolean;
  useParseErrorPlaceholder?: boolean;
  obfuscate?: boolean;
  randomizeColor?: boolean;
  randomizeLineLengths?: boolean;
  randomizeKeywordCase?: boolean;
  preserveComments?: boolean;
  enableKeywordSubstitution?: boolean;
  expandInLists?: boolean;
}
