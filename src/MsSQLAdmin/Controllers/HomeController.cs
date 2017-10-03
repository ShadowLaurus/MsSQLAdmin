using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Models;
using MsSQLAdmin.Services;
using MsSQLAdmin.Infrastructure;

namespace MsSQLAdmin.Controllers {
    public class HomeController : Controller {
        private DatabaseService ServiceDatabase { get; set; }
        private ConnectionService ServiceConnection { get; set; }

        public HomeController(DatabaseService serviceDatabase, ConnectionService serviceConnection) {
            this.ServiceDatabase = serviceDatabase;
            this.ServiceConnection = serviceConnection;
        }

        public IActionResult Index() {
            this.ServiceConnection.SetDatabaseConnection(null);
            return View();
        }

        [HttpGet("{serveur}")]
        public IActionResult Server([FromRoute]string serveur) {
            this.ServiceConnection.SetServeur(serveur);
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(DatabaseConnectionModel model) {
            if (ModelState.IsValid) {
                try {
                    await this.ServiceDatabase.TestConnectionAsync(model.ConnectionString);
                    this.ServiceConnection.SetDatabaseConnection(model);

                    return RedirectToAction("Server", new { serveur = model.Server.Replace("\\", "-") });
                } catch (Exception e) {
                    ModelState.AddModelError(string.Empty, e.Message);
                }
            }

            return View(model);
        }

        public IActionResult About() {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact() {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
