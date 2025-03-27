import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee{
  empId:number;
  empName:string;
  empAddress:string;
  empSalary:string;

}

const endpoint='http://localhost:5090/Employee/';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  apiInsertEmployeeMethod(emp:Employee):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(endpoint + 'PostData' ,emp,{headers});
  }

  apiGetUserDetailsMethod():Observable<Employee[]>{
    return this.http.get<Employee[]>(endpoint+'GetAllUsers');
  }

  apiDeleteEmployeeMethod(id:number):Observable<any>{
    return this.http.delete(endpoint+'deleteuser/'+id);
  }

  apiGetEmployeeWithId(id:any):Observable<any>
  {
    return this.http.get<Employee>(endpoint+'GetUserWithID/'+id);
  }

  apiEditEmployeeDetails(emp:Employee)
  {
    return this.http.put<Employee>(endpoint+'UpdateUsers?id='+emp.empId,emp);
  }
}
