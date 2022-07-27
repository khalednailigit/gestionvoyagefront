import { Routes } from '@angular/router';
import { MessageComponent } from 'src/app/pages/message/message.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'message',      component: MessageComponent },
    { path: 'travel', loadChildren: () => import('src/app/pages/travels/travels.module').then(m => m.TravelsModule)
},


];
