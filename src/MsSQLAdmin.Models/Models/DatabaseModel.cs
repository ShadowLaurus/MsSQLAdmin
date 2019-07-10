using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsSQLAdmin.Models
{
    public class DatabaseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Size { get; set; }
    }
}
