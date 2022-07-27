import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelsRoutingModule } from './travels-routing.module';
import { AssignToTravelComponent } from './assign-to-travel/assign-to-travel.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { FindUserComponent } from './find-user/find-user.component';


@NgModule({
  declarations: [
    AssignToTravelComponent,
    ListComponent,
    SearchComponent,
    AddComponent,
    UpdateComponent,
    FindUserComponent
  ],
  imports: [
    CommonModule,
    TravelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbDatepickerModule,
    ToastrModule.forRoot({
      timeOut: 1300,
      autoDismiss: true,
      maxOpened: 1
    }),

  ]
})
export class TravelsModule { }
