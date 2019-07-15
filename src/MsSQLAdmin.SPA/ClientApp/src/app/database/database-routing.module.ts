import { DatabaseSqlComponent } from './database-sql/database-sql.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { DatabaseDatabaseComponent } from './database-database/database-database.component';
import { DatabaseConnectionComponent } from './database-connection/database-connection.component';
import { DatabaseWelcomeComponent } from './database-welcome/database-welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../app.guard';
import { DatabaseGuard } from './database.guard';

const databaseRoutes: Routes = [
  {
    path: 'database',
    component: DatabaseWelcomeComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: 'database',
        canActivate: [DatabaseGuard],
        component: DatabaseDatabaseComponent,
      },
      {
        path: 'tables',
        canActivate: [DatabaseGuard],
        component: DatabaseTableComponent,
      },
      {
        path: 'sql',
        canActivate: [DatabaseGuard],
        component: DatabaseSqlComponent,
      },
      { path: '', component: DatabaseConnectionComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(databaseRoutes)],
  exports: [RouterModule],
})
export class DatabaseRoutingModule {}
