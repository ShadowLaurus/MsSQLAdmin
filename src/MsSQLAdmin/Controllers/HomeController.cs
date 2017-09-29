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
        private DatabaseService Service { get; set; }

        public HomeController(DatabaseService service) {
            this.Service = service;
        }

        public IActionResult Index() {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(DatabaseConnectionModel model) {
            if (ModelState.IsValid) {
                await this.Service.TestConnectionAsync(model.ConnectionString);
                this.HttpContext.Session.Set("DatabaseConnectionModel", model);

                return RedirectToAction("Index", "Database");
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
