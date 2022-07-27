import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MessageComponent } from './pages/message/message.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FeedBackComponent } from './pages/feedbackandreclamation/feed-back/feed-back.component';
import { RendezVousFeedbackComponent } from './pages/feedbackandreclamation/rendez-vous-feedback/rendez-vous-feedback.component';
import { ReclamationComponent } from './pages/feedbackandreclamation/reclamation/reclamation.component';
import { LoginComponent } from './pages/login/login.component';
import { httpInterceptorProviders } from './shared/_helper/http-request.interceptor';
import { FeedBackContentComponent } from './pages/feedbackandreclamation/feed-back-content/feed-back-content.component';
import { AddFeedBackComponent } from './pages/feedbackandreclamation/add-feed-back/add-feed-back.component';
import { StatisticComponent } from './pages/feedbackandreclamation/statistic/statistic.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListInvitationComponent } from './pages/invitation/list-invitation/list-invitation.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
 


import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

import { UsersListComponent } from './pages/users-list/users-list.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatGridListModule,
    MatListModule,
    //NgSelectModule,
    MatSelectModule

    

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MessageComponent,
    UsersListComponent,
    BlogComponent,
    FeedBackComponent,
    RendezVousFeedbackComponent,
    ReclamationComponent,
    LoginComponent,
    FeedBackContentComponent,
    AddFeedBackComponent,
    StatisticComponent,
    RegisterComponent,
    ListInvitationComponent,
    UserProfileComponent
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
