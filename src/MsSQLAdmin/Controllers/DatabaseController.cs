using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Services;
using MsSQLAdmin.Models;
using System.Threading.Tasks;

namespace MsSQLAdmin.Controllers {
    public class DatabaseController : Controller {
        private DatabaseService ServiceDatabase { get; set; }
        private ConnectionService ServiceConnection { get; set; }

        public DatabaseController(DatabaseService serviceDatabase, ConnectionService serviceConnection) {
            this.ServiceDatabase = serviceDatabase;
            this.ServiceConnection = serviceConnection;
        }

        [HttpGet("Editor/{serveur}")]
        public async Task<IActionResult> Index([FromRoute]string serveur) {
            var model = this.ServiceConnection.GetDatabaseConnection();
            var models = await this.ServiceDatabase.GetDatabasesListAsync(model.ConnectionString);

            ViewBag.Serveur = serveur;

            return View(models);
        }

        [HttpGet("Editor/{serveur}/{database}")]
        public async Task<IActionResult> Tables([FromRoute]string serveur, [FromRoute]string database) {
            var model = this.ServiceConnection.GetDatabaseConnection();
            model.Database = database;

            var models = await this.ServiceDatabase.GetDatabaseTablesListAsync(model.ConnectionString, database);

            ViewBag.Serveur = serveur;
            ViewBag.Database = database;

            return View(models);
        }

        [ResponseCache(Duration = 60)]//, VaryByQueryKeys = new string[] { "serveur", "database", "table" }
        [HttpGet("Editor/{serveur}/{database}/{table}")]
        public async Task<IActionResult> Table([FromRoute]string serveur, [FromRoute] string database, [FromRoute]string table) {
            var connection = this.ServiceConnection.GetDatabaseConnection();
            connection.Database = database;

            TableViewModel model = new TableViewModel() {
                TableColumns = await this.ServiceDatabase.GetDatabaseTableDetailAsync(connection.ConnectionString, table)
            };

            ViewBag.Serveur = serveur;
            ViewBag.Database = database;
            ViewBag.Table = table;

            return View(model);
        }

        [HttpPost("Editor/{serveur}/{database}/{table}")]
        public async Task<IActionResult> Data([FromRoute]string serveur, [FromRoute] string database, [FromRoute] string table, [FromForm] string sql) {
            var connection = this.ServiceConnection.GetDatabaseConnection();
            connection.Database = database;

            TableViewModel model = new TableViewModel() {
                TableColumns = await this.ServiceDatabase.GetDatabaseTableDetailAsync(connection.ConnectionString, table),
                TableData = await this.ServiceDatabase.GetDataAsync(connection.ConnectionString, sql)
            };

            ViewBag.Serveur = serveur;
            ViewBag.Database = database;
            ViewBag.Table = table;

            return PartialView("_Data", model);
        }
    }
}