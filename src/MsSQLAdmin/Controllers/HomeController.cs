using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MsSQLAdmin.Models;
using MsSQLAdmin.Services;

namespace MsSQLAdmin.Controllers {
    public class HomeController : Controller {
        private DatabaseService ServiceDatabase { get; set; }
        private ConnectionService ServiceConnection { get; set; }

        public HomeController(DatabaseService serviceDatabase, ConnectionService serviceConnection) {
            this.ServiceDatabase = serviceDatabase;
            this.ServiceConnection = serviceConnection;
        }

        [HttpGet]
        public IActionResult Index() {
            this.ServiceConnection.SetDatabaseConnection(new DatabaseConnectionModel() {
                Server = @"(localdb)\MSSQLLocalDB",
                Database = "master"
            });
            return this.View(this.ServiceConnection.GetDatabaseConnection());
        }

        [HttpGet("[action]/{serveur}")]
        public IActionResult ChangeServer([FromRoute]string serveur) {
            this.ServiceConnection.SetServeur(serveur);
            return this.View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(DatabaseConnectionModel model) {
            if (this.ModelState.IsValid) {
                try {
                    await this.ServiceDatabase.TestConnectionAsync(model.ConnectionString);
                    this.ServiceConnection.SetDatabaseConnection(model);

                    return this.RedirectToAction(nameof(ChangeServer), new { serveur = model.Server.Replace("\\", "-") });
                } catch (Exception e) {
                    this.ModelState.AddModelError(string.Empty, e.Message);
                }
            }

            return this.View(model);
        }

        public IActionResult About() {
            this.ViewData["Message"] = "Your application description page.";

            return this.View();
        }

        public IActionResult Contact() {
            this.ViewData["Message"] = "Your contact page.";

            return this.View();
        }

        public IActionResult Error() {
            return this.View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
