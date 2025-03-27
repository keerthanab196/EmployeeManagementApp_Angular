import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { FormsModule } from '@angular/forms';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertDBComponent,
    EmpDetailsComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
