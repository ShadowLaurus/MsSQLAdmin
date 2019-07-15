import { DatabaseService } from 'src/api/generated/controllers/Database';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseWelcomeComponent } from './database-welcome/database-welcome.component';
import { DatabaseConnectionComponent } from './database-connection/database-connection.component';
import { DatabaseDatabaseComponent } from './database-database/database-database.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { DatabaseSqlComponent } from './database-sql/database-sql.component';

@NgModule({
  declarations: [
    DatabaseWelcomeComponent,
    DatabaseConnectionComponent,
    DatabaseDatabaseComponent,
    DatabaseTableComponent,
    DatabaseSqlComponent,
  ],
  imports: [CommonModule, FormsModule, DatabaseRoutingModule],
  providers: [
    {
      provide: DatabaseService,
      useClass: DatabaseService,
    },
  ],
})
export class DatabaseModule {}
