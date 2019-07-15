/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 * undefined/swagger
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SqlFormatService} from '../../../controllers/SqlFormat';

@Injectable()
export class FormattsqlwithoptionsFormService {
  form: FormGroup;
  constructor(
    private sqlFormatService: SqlFormatService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        inputString: new FormControl(undefined, []),
        reFormat: new FormControl(undefined, []),
        indent: new FormControl(undefined, []),
        spacesPerTab: new FormControl(undefined, []),
        maxLineWidth: new FormControl(undefined, []),
        statementBreaks: new FormControl(undefined, []),
        clauseBreaks: new FormControl(undefined, []),
        expandCommaLists: new FormControl(undefined, []),
        trailingCommas: new FormControl(undefined, []),
        spaceAfterExpandedComma: new FormControl(undefined, []),
        expandBooleanExpressions: new FormControl(undefined, []),
        expandCaseStatements: new FormControl(undefined, []),
        expandBetweenConditions: new FormControl(undefined, []),
        breakJoinOnSections: new FormControl(undefined, []),
        uppercaseKeywords: new FormControl(undefined, []),
        coloring: new FormControl(undefined, []),
        keywordStandardization: new FormControl(undefined, []),
        useParseErrorPlaceholder: new FormControl(undefined, []),
        obfuscate: new FormControl(undefined, []),
        randomizeColor: new FormControl(undefined, []),
        randomizeLineLengths: new FormControl(undefined, []),
        randomizeKeywordCase: new FormControl(undefined, []),
        preserveComments: new FormControl(undefined, []),
        enableKeywordSubstitution: new FormControl(undefined, []),
        expandInLists: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.sqlFormatService.formattsqlwithoptions(data);
  }
}
