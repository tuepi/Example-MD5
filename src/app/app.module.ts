import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTourComponent } from './components/list-tour/list-tour.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateTourComponent } from './components/create-tour/create-tour.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { DeleteTourComponent } from './components/delete-tour/delete-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTourComponent,
    DetailComponent,
    CreateTourComponent,
    EditTourComponent,
    DeleteTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
