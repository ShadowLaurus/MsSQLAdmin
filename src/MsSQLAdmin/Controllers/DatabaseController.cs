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

        public async Task<IActionResult> Index() {
            var model = this.HttpContext.Session.Get< DatabaseConnectionModel>("DatabaseConnectionModel");
            var models =await this.Service.GetDatabasesListAsync(model.ConnectionString);
            return View(models);
        }
    }
}