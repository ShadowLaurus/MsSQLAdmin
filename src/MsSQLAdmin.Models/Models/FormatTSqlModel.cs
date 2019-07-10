using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsSQLAdmin.Models {
    public class FormatTSqlModel {
        public string InputString { get; set; }
        public bool ReFormat { get; set; }
        public string Indent { get; set; }
        public int SpacesPerTab { get; set; }
        public int MaxLineWidth { get; set; }
        public int StatementBreaks { get; set; }
        public int ClauseBreaks { get; set; }
        public bool ExpandCommaLists { get; set; }
        public bool TrailingCommas { get; set; }
        public bool SpaceAfterExpandedComma { get; set; }
        public bool ExpandBooleanExpressions { get; set; }
        public bool ExpandCaseStatements { get; set; }
        public bool ExpandBetweenConditions { get; set; }
        public bool BreakJoinOnSections { get; set; }
        public bool UppercaseKeywords { get; set; }
        public bool Coloring { get; set; }
        public bool KeywordStandardization { get; set; }
        public bool UseParseErrorPlaceholder { get; set; }
        public bool Obfuscate { get; set; }
        public bool RandomizeColor { get; set; }
        public bool RandomizeLineLengths { get; set; }
        public bool RandomizeKeywordCase { get; set; }
        public bool PreserveComments { get; set; }
        public bool EnableKeywordSubstitution { get; set; }
        public bool ExpandInLists { get; set; }

        public FormatTSqlModel() {
            this.ReFormat = true;
            this.Indent = "\t";
            this.SpacesPerTab = 4;
            this.MaxLineWidth = 999;
            this.StatementBreaks = 2;
            this.ClauseBreaks = 1;
            this.ExpandCommaLists = true;
            this.TrailingCommas = false;
            this.SpaceAfterExpandedComma = false;
            this.ExpandBooleanExpressions = true;
            this.ExpandCaseStatements = true;
            this.ExpandBetweenConditions = true;
            this.BreakJoinOnSections = false;
            this.UppercaseKeywords = true;
            this.Coloring = true;
            this.KeywordStandardization = false;
            this.UseParseErrorPlaceholder = false;
            this.Obfuscate = false;
            this.RandomizeColor = false;
            this.RandomizeLineLengths = false;
            this.RandomizeKeywordCase = false;
            this.PreserveComments = false;
            this.EnableKeywordSubstitution = false;
            this.ExpandInLists = true;
        }
    }
}
