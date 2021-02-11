import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { cvRoutes } from './cv/cv.routing';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      ...cvRoutes,
      { path: '', redirectTo: 'cv', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
