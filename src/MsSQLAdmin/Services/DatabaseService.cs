using MsSQLAdmin.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace MsSQLAdmin.Services {
    public class DatabaseService {
        public async Task<bool> TestConnectionAsync(string connectionString) {
            using (var connection = new SqlConnection(connectionString)) {
                await connection.OpenAsync();
                return true;
            }
        }

        public async Task<List<DatabaseModel>> GetDatabasesListAsync(string connectionString) {
            List<DatabaseModel> models = new List<DatabaseModel>();
            using (var connection = new SqlConnection(connectionString)) {
                await connection.OpenAsync();

                using (var command = connection.CreateCommand()) {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.CommandText = "sp_databases";
                    //EXEC sp_databases
                    //SELECT* FROM master.dbo.sysdatabases
                    
                    using (var reader = await command.ExecuteReaderAsync()) {
                        while (await reader.ReadAsync()) {
                            models.Add(new DatabaseModel() {
                                Name = await reader.IsDBNullAsync(0) ? null : reader.GetString(0),
                                Description = await reader.IsDBNullAsync(2) ? null : reader.GetString(2),
                                Size = reader.GetInt32(1)
                            });
                        }
                    }
                }
            }

            return models;
        }
    }
}
