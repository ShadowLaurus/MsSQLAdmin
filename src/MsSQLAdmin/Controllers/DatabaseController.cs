using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Services;
using MsSQLAdmin.Models;
using MsSQLAdmin.Infrastructure;
using System.Threading.Tasks;

namespace MsSQLAdmin.Controllers {
    public class DatabaseController : Controller {
        private DatabaseService Service { get; set; }

        public DatabaseController(DatabaseService service) {
            this.Service = service;
        }

        [HttpGet("Editor/{serveur}")]
        public async Task<IActionResult> Index(string serveur) {
            var model = this.HttpContext.Session.Get< DatabaseConnectionModel>("DatabaseConnectionModel");
            var models =await this.Service.GetDatabasesListAsync(model.ConnectionString);

            ViewBag.Serveur = serveur;

            return View(models);
        }

        [HttpGet("Editor/{serveur}/{database}")]
        public async Task<IActionResult> Tables(string serveur, string database) {
            var model = this.HttpContext.Session.Get<DatabaseConnectionModel>("DatabaseConnectionModel");
            model.Database = database;

            var models = await this.Service.GetDatabaseTablesListAsync(model.ConnectionString, database);

            ViewBag.Serveur = serveur;
            ViewBag.Database = database;

            return View(models);
        }

        [HttpGet("Editor/{serveur}/{database}/{table}")]
        public async Task<IActionResult> Table(string serveur, string database, string table) {
            var model = this.HttpContext.Session.Get<DatabaseConnectionModel>("DatabaseConnectionModel");
            model.Database = database;

            var models = await this.Service.GetDatabaseTableDetailAsync(model.ConnectionString, table);

            ViewBag.Serveur = serveur;
            ViewBag.Database = database;
            ViewBag.Table = table;

            return View(models);
        }
    }
}