import { Component,OnInit,Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-db',
  templateUrl: './insert-db.component.html',
  styleUrls: ['./insert-db.component.css']
})
export class InsertDBComponent implements OnInit{

  @Input() userdata={empId:0,empName:'',empAddress:'',empSalary:''};
  

  constructor(public serviceObj:MyServiceService,public routerObj:Router){}

  ngOnInit(): void {
  }

  addEmployeeDetails():void
  {debugger;
    
      this.serviceObj.apiInsertEmployeeMethod(this.userdata).subscribe((result)=>{
        this.routerObj.navigate(['/EmployeeDetailsDisplay'])
      },(err)=>{
        console.log(err);
      });
  }
  

}
