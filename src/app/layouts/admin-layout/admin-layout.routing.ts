import { Routes } from '@angular/router';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { FeedBackComponent } from 'src/app/pages/feedbackandreclamation/feed-back/feed-back.component';
import { AuthGuard } from 'src/app/shared/services/guards/auth.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard]  },
    { path: 'blog',      component: BlogComponent ,canActivate: [AuthGuard]  },
    { path: 'feedback',      component: FeedBackComponent ,canActivate: [AuthGuard] },
 

];
