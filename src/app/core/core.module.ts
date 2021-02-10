import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
