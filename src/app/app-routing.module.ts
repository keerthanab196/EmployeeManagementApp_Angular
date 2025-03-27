import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'InsertDB',component:InsertDBComponent},
  {path:'EmployeeDetailsDisplay',component:EmpDetailsComponent},
  {path:'EmployeeDetails/:id',component:ViewEmployeeComponent},
  {path:'editEmployee/:id',component:EditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
