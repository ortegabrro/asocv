import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [ResumeComponent, PortafolioComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class CvModule { }
