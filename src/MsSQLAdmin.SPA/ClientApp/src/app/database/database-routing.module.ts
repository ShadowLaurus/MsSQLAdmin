import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../app.guard';

const databaseRoutes: Routes = [
  {
    path: 'database',
    component: null,
    canActivate: [AppGuard],
    children: [],
  },
];
@NgModule({
  imports: [RouterModule.forChild(databaseRoutes)],
  exports: [RouterModule],
})
export class DatabaseRoutingModule {}
