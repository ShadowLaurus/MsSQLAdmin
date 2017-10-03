using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using MsSQLAdmin.Infrastructure;
using MsSQLAdmin.Models;

namespace MsSQLAdmin.Services {
    public class ConnectionService {
        private const string DatabaseConnectionKey = "DatabaseConnectionModel";

        private readonly IHttpContextAccessor _httpContextAccessor;
        private ISession _session => _httpContextAccessor.HttpContext.Session;

        public string Serveur => _session.GetString("Serveur");
        public string Database => _session.GetString("Database");
        public string Table => _session.GetString("Table");

        public ConnectionService(IHttpContextAccessor httpContextAccessor) {
            _httpContextAccessor = httpContextAccessor;
        }

        public bool HasDatabaseConnection() {
            return this._session.GetString(DatabaseConnectionKey) != null;
        }

        public DatabaseConnectionModel GetDatabaseConnection() {
            return this._session.Get<DatabaseConnectionModel>(DatabaseConnectionKey);
        }

        public void SetDatabaseConnection(DatabaseConnectionModel  model) {
            this._session.Set(DatabaseConnectionKey, model);
        }

        public void SetServeur(string serveur) {
            this._session.Set("Serveur", serveur);
            this._session.Remove("Database");
            this._session.Remove("Table");
        }

        public void SetDatabase(string database) {
            this._session.Set("Database", database);
            this._session.Remove("Table");
        }

        public void SetTable(string table) {
            this._session.Set("Table", table);
        }
    }
}