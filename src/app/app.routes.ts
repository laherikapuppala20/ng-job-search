import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';

export const routes: Routes = [
    {
        path: 'jobs', component: JobListComponent
    },
    {
        path: 'jobs/:id', component: JobDescriptionComponent
    },
    { path: 'favorite-jobs', component: JobListComponent },
    {
        path: '**', redirectTo: 'jobs', pathMatch: 'full'
    }
];
