import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTourComponent} from "./components/list-tour/list-tour.component";
import {CreateTourComponent} from "./components/create-tour/create-tour.component";
import {DetailComponent} from "./components/detail/detail.component";
import {EditTourComponent} from "./components/edit-tour/edit-tour.component";
import {DeleteTourComponent} from "./components/delete-tour/delete-tour.component";

const routes: Routes = [
  {
    path : '',
    component : ListTourComponent
  },
  {
    path : 'create',
    component : CreateTourComponent
  },
  {
    path : 'detail/:id',
    component : DetailComponent
  },
  {
    path : 'edit/:id',
    component : EditTourComponent
  },
  {
    path : 'delete/:id',
    component : DeleteTourComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
