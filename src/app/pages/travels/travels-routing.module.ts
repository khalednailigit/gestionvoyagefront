import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AssignToTravelComponent } from './assign-to-travel/assign-to-travel.component';
import { FindUserComponent } from './find-user/find-user.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "",
    component: AssignToTravelComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path: "search/user",
    component: FindUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelsRoutingModule { }
