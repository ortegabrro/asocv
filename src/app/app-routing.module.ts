import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '../app/cv/pages/resume/resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/resume' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
