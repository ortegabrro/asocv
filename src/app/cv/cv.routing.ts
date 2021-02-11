import { Routes } from '@angular/router';
import { CvComponent } from './cv.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const cvRoutes: Routes = [
    {
        path: 'cv', component: CvComponent, children: [
            { path: '', component: ResumeComponent }
        ]
    }
];
