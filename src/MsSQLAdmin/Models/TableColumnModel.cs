using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsSQLAdmin.Models {
    public class TableColumnModel {
        public string Name { get; set; }
        public string Type { get; set; }
        public int MaxLength { get; set; }
        public int Precision { get; set; }
        public int Scale { get; set; }
        public bool IsNullable { get; set; }
        public bool IsPrimaryKey { get; set; }
    }
}