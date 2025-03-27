import { Component,OnInit,Input} from '@angular/core';
import { Employee, MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})


export class ViewEmployeeComponent implements OnInit {

  employee:any;

  constructor(public servicObj:MyServiceService,public routerObj:Router,public route:ActivatedRoute){

  }

  ngOnInit(): void {
      const id=this.route.snapshot.paramMap.get('id');
      this.viewUserDetaiils(id);
      
    
  }

  viewUserDetaiils(id:any)
  {
    this.servicObj.apiGetEmployeeWithId(id).subscribe(
      (result)=>{this.employee=result},
      (error)=>{console.log(error);}
    );

  }

  editUserDetails(emp:any)
  {
      this.routerObj.navigate(['/editEmployee',emp.empId]);
  }



}
