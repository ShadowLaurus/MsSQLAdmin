using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MsSQLAdmin.Models {
    public class DatabaseConnectionModel {
        [Required]
        [Display(Name = "Serveur : ")]
        public string Server { get; set; }
        [Display(Name = "Base de données : ")]
        public string Database { get; set; }
        [Display(Name = "Login : ")]
        public string Username { get; set; }
        [Display(Name = "Mdp : ")]
        public string Password { get; set; }
        [Display(Name = "Type de connexion : ")]
        public bool IsWindows { get; set; }

        [JsonIgnore]
        public string ConnectionString => this.IsWindows ? this.ConnectionStringWindows : this.ConnectionStringUserPwd;
        [JsonIgnore]
        public string ConnectionStringUserPwd => $"Server={this.Server};Database={this.Database};User Id={this.Username};Password={this.Password};";
        [JsonIgnore]
        public string ConnectionStringWindows => $"Server={this.Server};Database={this.Database};Trusted_Connection=True;";
    }
}