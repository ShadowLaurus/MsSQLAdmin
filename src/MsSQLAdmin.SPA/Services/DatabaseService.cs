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

        public async Task<List<TableListModel>> GetDatabaseTablesListAsync(string connectionString, string database) {
            List<TableListModel> models = new List<TableListModel>();
            using (var connection = new SqlConnection(connectionString)) {
                await connection.OpenAsync();

                using (var command = connection.CreateCommand()) {
                    command.CommandType = System.Data.CommandType.Text;
                    command.CommandText = $"SELECT TABLE_SCHEMA, TABLE_NAME FROM [{database}].[INFORMATION_SCHEMA].[TABLES] WHERE TABLE_TYPE = 'BASE TABLE'";

                    using (var reader = await command.ExecuteReaderAsync()) {
                        while (await reader.ReadAsync()) {
                            models.Add(new TableListModel() {
                                Schema = await reader.IsDBNullAsync(0) ? null : reader.GetString(0),
                                Name = await reader.IsDBNullAsync(1) ? null : reader.GetString(1)
                            });
                        }
                    }
                }
            }

            return models;
        }

        public async Task<List<TableColumnModel>> GetDatabaseTableDetailAsync(string connectionString, string table) {
            List<TableColumnModel> models = new List<TableColumnModel>();
            using (var connection = new SqlConnection(connectionString)) {
                await connection.OpenAsync();

                using (var command = connection.CreateCommand()) {
                    command.CommandType = System.Data.CommandType.Text;
                    command.CommandText = @"SELECT c.NAME 'Name'
	,t.NAME 'Type'
	,CAST(c.max_length AS INT) 'MaxLength'
	,CAST(c.precision AS INT) 'Precision'
	,CAST(c.scale AS INT) 'Scale'
	,CAST(ISNULL(c.is_nullable, 0) AS INT) 'IsNullable'
	,CAST(ISNULL(i.is_primary_key, 0) AS INT) 'IsPrimaryKey'
FROM sys.columns c
INNER JOIN sys.types t ON c.user_type_id = t.user_type_id
LEFT OUTER JOIN sys.index_columns ic ON ic.object_id = c.object_id
	AND ic.column_id = c.column_id
LEFT OUTER JOIN sys.indexes i ON ic.object_id = i.object_id
	AND ic.index_id = i.index_id
WHERE c.object_id = OBJECT_ID(@tablename)";

                    command.Parameters.Add(new SqlParameter("tablename", table));

                    using (var reader = await command.ExecuteReaderAsync()) {
                        while (await reader.ReadAsync()) {
                            models.Add(new TableColumnModel() {
                                Name = await reader.IsDBNullAsync(0) ? null : reader.GetString(0),
                                Type = await reader.IsDBNullAsync(1) ? null : reader.GetString(1),
                                MaxLength = reader.GetInt32(2),
                                Precision = reader.GetInt32(3),
                                Scale = reader.GetInt32(4),
                                IsNullable = reader.GetInt32(5) > 0 ? true : false,
                                IsPrimaryKey = reader.GetInt32(6) > 0 ? true : false
                            });
                        }
                    }
                }
            }

            return models;
        }

        public async Task<TableViewModel> GetDataAsync(string connectionString, string sql) {
            TableViewModel model = new TableViewModel();
            IList<IDictionary<string, object>> models = new List<IDictionary<string, object>>();

            using (var connection = new SqlConnection(connectionString)) {
                await connection.OpenAsync();

                using (var command = connection.CreateCommand()) {
                    command.CommandType = System.Data.CommandType.Text;
                    command.CommandText = sql;

                    if (sql.Trim().ToLower().StartsWith("select")) {
                        using (var reader = await command.ExecuteReaderAsync()) {
                            model.TableColumns = Enumerable.Range(0, reader.FieldCount).Select(reader.GetName).Select(x => new TableColumnModel() { Name = x }).ToList();

                            while (await reader.ReadAsync()) {
                                models.Add(new Dictionary<string, object>());

                                foreach (var column in model.TableColumns) {
                                    int order = reader.GetOrdinal(column.Name);
                                    models.Last().Add(column.Name, reader.GetValue(order));
                                }
                            }

                            model.TableData = models;
                        }
                    } else {
                        model.DDLResult = await command.ExecuteNonQueryAsync();
                    }
                }
            }

            return model;
        }
    }
}
