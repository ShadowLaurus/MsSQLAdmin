using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using MsSQLAdmin.Infrastructure;
using MsSQLAdmin.Models;

namespace MsSQLAdmin.Services {
    public class ConnectionService {
        private const string DatabaseConnectionKey = "DatabaseConnectionModel";

        private readonly IHttpContextAccessor _httpContextAccessor;
        private ISession _session => _httpContextAccessor.HttpContext.Session;

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
    }
}