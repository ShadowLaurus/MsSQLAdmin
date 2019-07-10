using Microsoft.Extensions.PlatformAbstractions;

namespace MsSQLAdmin.Models {
    public class AppSettings {
        public string Backend { get; set; }
        public string Version { get; } = PlatformServices.Default.Application.ApplicationVersion;
    }
}
