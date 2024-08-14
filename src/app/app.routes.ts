import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', component: ResumeComponent },
    { path: 'test', component: LandingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
