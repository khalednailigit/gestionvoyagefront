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
import { BlogComponent } from './pages/blog/blog.component';
import { FeedBackComponent } from './pages/feedbackandreclamation/feed-back/feed-back.component';
import { RendezVousFeedbackComponent } from './pages/feedbackandreclamation/rendez-vous-feedback/rendez-vous-feedback.component';
import { ReclamationComponent } from './pages/feedbackandreclamation/reclamation/reclamation.component';
import { LoginComponent } from './pages/login/login.component';
import { SendinvitationComponent } from './pages/invitation/sendinvitation/sendinvitation.component';
import { InvitationComponent } from './models/invitation/invitation.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogComponent,
    FeedBackComponent,
    RendezVousFeedbackComponent,
    ReclamationComponent,
    LoginComponent,
    SendinvitationComponent,
    InvitationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
