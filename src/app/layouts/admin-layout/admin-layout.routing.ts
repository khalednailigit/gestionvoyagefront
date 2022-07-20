import { Routes } from '@angular/router';
import { BlogComponent } from 'src/app/pages/blog/blog.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'blog',      component: BlogComponent },

];
