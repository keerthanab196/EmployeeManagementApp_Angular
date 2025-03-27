import { Component,OnInit,Input } from '@angular/core';
import { Employee, MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  emp:any;  
  constructor(public serviceObj:MyServiceService,public routerObj:Router,public route:ActivatedRoute){}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.fetchUserDetailsWithID(id);
  }

  fetchUserDetailsWithID(id:any)
  {
    this.serviceObj.apiGetEmployeeWithId(id).subscribe(
      (result)=>{this.emp=result},
      (error)=>{console.log(error);}
    );
  }

  updateUserDetails(empl:Employee)
  {
    this.serviceObj.apiEditEmployeeDetails(empl).subscribe(
      (result)=>{alert("Updated the record");
        this.routerObj.navigate(['/EmployeeDetails',empl.empId]);
      },
      (error)=>{console.log(error);}
    );
  }

}
