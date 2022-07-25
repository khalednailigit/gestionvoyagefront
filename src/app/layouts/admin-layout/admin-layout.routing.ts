import { Routes } from '@angular/router';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { AddFeedBackComponent } from 'src/app/pages/feedbackandreclamation/add-feed-back/add-feed-back.component';
import { FeedBackComponent } from 'src/app/pages/feedbackandreclamation/feed-back/feed-back.component';
import { StatisticComponent } from 'src/app/pages/feedbackandreclamation/statistic/statistic.component';
import { AuthGuard } from 'src/app/shared/services/guards/auth.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard]  },
    { path: 'blog',      component: BlogComponent ,canActivate: [AuthGuard]  },
    { path: 'feedback',      component: FeedBackComponent ,canActivate: [AuthGuard] },
    { path: 'add',      component: AddFeedBackComponent ,canActivate: [AuthGuard] },
    { path: 'statistique',      component: StatisticComponent ,canActivate: [AuthGuard] }

];
