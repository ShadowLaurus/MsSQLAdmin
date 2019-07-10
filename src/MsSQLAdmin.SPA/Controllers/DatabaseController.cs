using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Services;
using MsSQLAdmin.Models;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;

namespace MsSQLAdmin.Controllers {
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class DatabaseController : Controller {
        private DatabaseService ServiceDatabase { get; set; }

        public DatabaseController(DatabaseService serviceDatabase) {
            this.ServiceDatabase = serviceDatabase;
        }

        [HttpGet("default")]
        public DatabaseConnectionModel GetDefaultConnection() {
            return new DatabaseConnectionModel() {
                Server = @"(localdb)\MSSQLLocalDB",
                Database = "master",
                IsWindows = true
            };
        }

        [HttpPost("valid")]
        public async Task<bool> ValidConnection([FromBody]DatabaseConnectionModel model) {
            if (this.ModelState.IsValid) {
                return await this.ServiceDatabase.TestConnectionAsync(model.ConnectionString);
            }

            return false;
        }

        [HttpPost("databases")]
        public async Task<List<DatabaseModel>> Index([FromBody]DatabaseConnectionModel model) {
            return await this.ServiceDatabase.GetDatabasesListAsync(model.ConnectionString);
        }

        [HttpPost("tables")]
        public async Task<List<TableListModel>> Tables([FromBody]DatabaseConnectionModel databaseConnectionModel) {
            return await this.ServiceDatabase.GetDatabaseTablesListAsync(databaseConnectionModel.ConnectionString, databaseConnectionModel.Database);
        }

        [ResponseCache(Duration = 60)]
        [HttpPost("tables/{table}")]
        public async Task<List<TableColumnModel>> Table([FromBody]DatabaseConnectionModel databaseConnectionModel, [FromRoute]string table) {
            return await this.ServiceDatabase.GetDatabaseTableDetailAsync(databaseConnectionModel.ConnectionString, table);
        }

        [HttpPost("{serveur}/sql")]
        public async Task<TableViewModel> Data([FromBody]DatabaseConnectionModel databaseConnectionModel, [FromForm] string sql) {
            return await this.ServiceDatabase.GetDataAsync(databaseConnectionModel.ConnectionString, sql);
        }
    }
}