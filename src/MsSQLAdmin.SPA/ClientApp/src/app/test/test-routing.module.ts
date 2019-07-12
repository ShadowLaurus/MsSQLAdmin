import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../app.guard';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { WelcomeComponent } from './welcome/welcome.component';

const testRoutes: Routes = [
  {
    path: 'test',
    component: WelcomeComponent,
    canActivate: [AppGuard],
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '', component: HomeComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
