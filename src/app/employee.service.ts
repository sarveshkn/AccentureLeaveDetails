import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable } from 'rxjs';
import { MessageserviceService  } from './messageservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeDetails } from './EmployeeDetails';
import { LeavesDetails } from './LeavesDetails';

@Injectable()
export class EmployeeService {

  private allLeaves = 'http://localhost:8081/AcnLeaveManagementService/allLeaves';

  private singleEmployee = 'http://localhost:8081/AcnLeaveManagementService/singleEmployee';

  private addLeave = "http://localhost:8081/AcnLeaveManagementService/addLeaves";

  employeeDetailsList : EmployeeDetails[]; 

  empolyeeListObs : Observable<EmployeeDetails[]>;

  saved : Boolean;

  constructor(private http: HttpClient, 
    private messageService : MessageserviceService) { 

    }

  getEmployees()  : Observable<EmployeeDetails[]> {
    this.empolyeeListObs = this.http.get<EmployeeDetails[]>(this.allLeaves);
    this.empolyeeListObs.subscribe(employeeDetailsList => this.employeeDetailsList = employeeDetailsList).unsubscribe;
    console.log("Reached add leaves of employee service" + JSON.stringify(this.employeeDetailsList));
    return this.empolyeeListObs;
  }

  getEmployee(_id: string): Observable<EmployeeDetails> {
    this.messageService.addMessage(`EmployeeService: fetched employee id=${_id}`);
    console.log("size " + this.employeeDetailsList.length);
    return Observable.of(this.employeeDetailsList.find(employee => employee._id == _id));
  }

  addLeaves(employeeDetails: EmployeeDetails): Observable<LeavesDetails> {
    console.log("Reached add leaves" + employeeDetails.leaveDetails.startDate);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<LeavesDetails>(this.addLeave, employeeDetails, httpOptions);
  }
 
}
