import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CvComponent } from './cv.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResumeComponent, PortafolioComponent, ContactComponent, CvComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CvModule { }
