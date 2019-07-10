using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MsSQLAdmin.Models;

namespace MsSQLAdmin.Controllers {
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InfoController : ControllerBase {
        private IOptions<AppSettings> Settings { get; set; }

        public InfoController(IOptions<AppSettings> settings) {
            this.Settings = settings;
        }

        [HttpGet]
        public AppSettings GetSettings() {
            return this.Settings.Value;
        }
    }
}