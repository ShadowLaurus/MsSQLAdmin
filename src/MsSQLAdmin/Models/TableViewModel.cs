using System.Collections.Generic;

namespace MsSQLAdmin.Models {
    public class TableViewModel {
        public IEnumerable<TableColumnModel> TableColumns { get; set; }

        public IEnumerable<IDictionary<string, string>> TableData { get; set; }
    }
}