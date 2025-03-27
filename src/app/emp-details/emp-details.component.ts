import { Component,OnInit,Input, Output } from '@angular/core';
import { Employee, MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{

  
  employees:Employee[]=[];
  searchTerm:string='';
  employee:Employee={empId:0,empName:'',empAddress:'',empSalary:''};

  constructor(public serviceObj:MyServiceService,public routerObj:Router){}

  ngOnInit():void{
    this.getEmployeeDetails();
  }

  getEmployeeDetails():void{
    this.serviceObj.apiGetUserDetailsMethod().subscribe(
      (result)=>this.employees=result);
    
  }

  deleteEmployee(id:number)
  {
      console.log(id);
      if(confirm('Are you sure want to delete this employee?'))
      {
        this.serviceObj.apiDeleteEmployeeMethod(id).subscribe(
          ()=>{alert("Record was deleted");
            this.getEmployeeDetails();
          },
          (error)=>{
            alert("Unable to delete");
            console.error(error);
          }
        );
      }
  }

  viewEmpDetails(id:number){
    
    this.routerObj.navigate(['/EmployeeDetails',id]);
  }

  filteredEmployees(){
    return this.employees.filter(emp=>
      emp.empName.toLowerCase().includes(this.searchTerm.toLowerCase())||
      emp.empAddress.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
