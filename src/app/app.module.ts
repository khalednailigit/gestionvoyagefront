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
    RendezVousFeedbackComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
