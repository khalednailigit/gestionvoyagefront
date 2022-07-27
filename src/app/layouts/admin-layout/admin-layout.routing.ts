import { Routes } from '@angular/router';
import { MessageComponent } from 'src/app/pages/message/message.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { AddFeedBackComponent } from 'src/app/pages/feedbackandreclamation/add-feed-back/add-feed-back.component';
import { FeedBackComponent } from 'src/app/pages/feedbackandreclamation/feed-back/feed-back.component';
import { StatisticComponent } from 'src/app/pages/feedbackandreclamation/statistic/statistic.component';
import { ListInvitationComponent } from 'src/app/pages/invitation/list-invitation/list-invitation.component';
import { AuthGuard } from 'src/app/shared/services/guards/auth.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HomeChatComponent } from 'src/app/pages/home-chat/home-chat.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'message',      component: HomeChatComponent },
    { path: 'travel', loadChildren: () => import('src/app/pages/travels/travels.module').then(m => m.TravelsModule)},
    { path: 'dashboard',      component: DashboardComponent  },
    { path: 'blog',      component: BlogComponent ,canActivate: [AuthGuard]  },
    { path: 'feedback',      component: FeedBackComponent ,canActivate: [AuthGuard] },
    { path: 'listeinvitation',      component: ListInvitationComponent ,canActivate: [AuthGuard] },
    { path: 'add/:id',      component: AddFeedBackComponent ,canActivate: [AuthGuard] },
    { path: 'statistique',      component: StatisticComponent ,canActivate: [AuthGuard] }

];
