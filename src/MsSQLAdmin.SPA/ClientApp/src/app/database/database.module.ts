import { DatabaseService } from 'src/api/generated/controllers/Database';
import { NgModule } from '@angular/core';
import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseWelcomeComponent } from './database-welcome/database-welcome.component';
import { DatabaseConnectionComponent } from './database-connection/database-connection.component';
import { DatabaseDatabaseComponent } from './database-database/database-database.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { DatabaseSqlComponent } from './database-sql/database-sql.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DatabaseWelcomeComponent,
    DatabaseConnectionComponent,
    DatabaseDatabaseComponent,
    DatabaseTableComponent,
    DatabaseSqlComponent,
  ],
  imports: [SharedModule, DatabaseRoutingModule],
  providers: [
    {
      provide: DatabaseService,
      useClass: DatabaseService,
    },
  ],
})
export class DatabaseModule {}
