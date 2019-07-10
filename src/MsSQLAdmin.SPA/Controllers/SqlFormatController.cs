using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Infrastructure;
using MsSQLAdmin.Models;

namespace MsSQLAdmin.Controllers {
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class SqlFormatController : Controller {
        [HttpPost]
        [Route("FormatTSql")]
        public string FormatTSql([FromBody] FormatTSqlModel model) {
            return FormatTSqlWithOptions(new FormatTSqlModel() { InputString = model.InputString });
        }

        [HttpPost]
        [Route("FormatTSqlWithOptions")]
        public string FormatTSqlWithOptions([FromBody] FormatTSqlModel model) {
            PoorMansTSqlFormatterRedux.Interfaces.ISqlTreeFormatter formatter = null;
            if (model.ReFormat) {
                formatter = new PoorMansTSqlFormatterRedux.Formatters.TSqlStandardFormatter(new PoorMansTSqlFormatterRedux.Formatters.TSqlStandardFormatterOptions {
                    IndentString = model.Indent,
                    SpacesPerTab = model.SpacesPerTab,
                    MaxLineWidth = model.MaxLineWidth,
                    NewStatementLineBreaks = model.StatementBreaks,
                    NewClauseLineBreaks = model.ClauseBreaks,
                    ExpandCommaLists = model.ExpandCommaLists,
                    TrailingCommas = model.TrailingCommas,
                    SpaceAfterExpandedComma = model.SpaceAfterExpandedComma,
                    ExpandBooleanExpressions = model.ExpandBooleanExpressions,
                    ExpandCaseStatements = model.ExpandCaseStatements,
                    ExpandBetweenConditions = model.ExpandBetweenConditions,
                    BreakJoinOnSections = model.BreakJoinOnSections,
                    UppercaseKeywords = model.UppercaseKeywords,
                    HTMLColoring = model.Coloring,
                    KeywordStandardization = model.KeywordStandardization,
                    ExpandInLists = model.ExpandInLists
                });

            } else if (model.Obfuscate)
                formatter = new PoorMansTSqlFormatterRedux.Formatters.TSqlObfuscatingFormatter(
                  model.RandomizeKeywordCase,
                  model.RandomizeColor,
                  model.RandomizeLineLengths,
                  model.PreserveComments,
                  model.EnableKeywordSubstitution
                    );
            else
                formatter = new PoorMansTSqlFormatterRedux.Formatters.TSqlIdentityFormatter(model.Coloring);

            if (model.UseParseErrorPlaceholder)
                formatter.ErrorOutputPrefix = "{PARSEERRORPLACEHOLDER}";

            return FormatTSqlWithFormatter(model.InputString, formatter);
        }

        private string FormatTSqlWithFormatter(string inputString, PoorMansTSqlFormatterRedux.Interfaces.ISqlTreeFormatter formatter) {
            if (this.HttpContext.IsLocalRequest()) {
                PoorMansTSqlFormatterRedux.SqlFormattingManager fullFormatter = new PoorMansTSqlFormatterRedux.SqlFormattingManager(new PoorMansTSqlFormatterRedux.Formatters.HtmlPageWrapper(formatter));
                return fullFormatter.Format(inputString);
            } else {
                return "Sorry, this web service can only be called from code hosted at localhost.";
            }
        }
    }
}