import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';
import { RecruitingComponent } from './recruiting/recruiting.component';

export const routes: Routes = [
    { path: '', component: ResumeComponent },
    { path: 'test', component: LandingComponent },
    { path: 'recruiting', component: RecruitingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
