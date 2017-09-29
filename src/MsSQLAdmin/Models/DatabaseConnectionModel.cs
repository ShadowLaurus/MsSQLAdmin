using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsSQLAdmin.Models {
    public class DatabaseConnectionModel {
        public string Server { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Database { get; set; }

        public string ConnectionString => $"Server={this.Server};Database={this.Database};User Id={this.Username};Password={this.Password};";
    }
}
