using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Services;
using MsSQLAdmin.Models;
using System.Threading.Tasks;
using System;

namespace MsSQLAdmin.Controllers {
    public class DatabaseController : Controller {
        private DatabaseService ServiceDatabase { get; set; }
        private ConnectionService ServiceConnection { get; set; }

        public DatabaseController(DatabaseService serviceDatabase, ConnectionService serviceConnection) {
            this.ServiceDatabase = serviceDatabase;
            this.ServiceConnection = serviceConnection;
        }

        [HttpGet("Server/{serveur}")]
        public async Task<IActionResult> Index([FromRoute]string serveur) {
            var model = this.ServiceConnection.GetDatabaseConnection();
            var models = await this.ServiceDatabase.GetDatabasesListAsync(model.ConnectionString);
            this.ServiceConnection.SetServeur(serveur);

            return View(models);
        }

        [HttpGet("Server/{serveur}/{database}")]
        public async Task<IActionResult> Tables([FromRoute]string serveur, [FromRoute]string database) {
            var model = this.ServiceConnection.GetDatabaseConnection();
            model.Database = database;

            this.ServiceConnection.SetDatabase(database);

            var models = await this.ServiceDatabase.GetDatabaseTablesListAsync(model.ConnectionString, database);
            return View(models);
        }

        [ResponseCache(Duration = 60)]//, VaryByQueryKeys = new string[] { "serveur", "database", "table" }
        [HttpGet("Server/{serveur}/{database}/{table}")]
        public async Task<IActionResult> Table([FromRoute]string serveur, [FromRoute] string database, [FromRoute]string table) {
            var connection = this.ServiceConnection.GetDatabaseConnection();
            connection.Database = database;

            this.ServiceConnection.SetDatabase(database);
            this.ServiceConnection.SetTable(table);

            TableViewModel model = new TableViewModel() {
                TableColumns = await this.ServiceDatabase.GetDatabaseTableDetailAsync(connection.ConnectionString, table)
            };

            return View(model);
        }

        [HttpPost("Server/{serveur}/Sql", Order = 1)]
        [HttpPost("Server/{serveur}/{database}/{table}", Order = 0)]
        public async Task<IActionResult> Data([FromRoute]string serveur, [FromRoute] string database, [FromRoute] string table, [FromForm] string sql) {
            var connection = this.ServiceConnection.GetDatabaseConnection();
            TableViewModel model = null;

            connection.Database = database;

            this.ServiceConnection.SetDatabase(database);
            this.ServiceConnection.SetTable(table);

            try {
                model = await this.ServiceDatabase.GetDataAsync(connection.ConnectionString, sql);
            } catch (Exception e) {
                model = new TableViewModel() { ErrorMessage = e.Message };
            }

            return PartialView("_Data", model);
        }

        [HttpGet("Server/{serveur}/Sql")]
        public IActionResult Sql([FromRoute]string serveur) {
            this.ServiceConnection.SetServeur(serveur);
            return View();
        }
    }
}