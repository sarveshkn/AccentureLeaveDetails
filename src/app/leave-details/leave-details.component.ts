import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';
import { EmployeeDetails } from '../EmployeeDetails';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  employeess : EmployeeDetails[];

  constructor(private employeeService: EmployeeService) { }

  selectedEmployee : EmployeeDetails;

  ngOnInit() {
    this.getEmployeess();
  }

  getEmployeess(): void {
    this.employeeService.getEmployees().subscribe(employeess => this.employeess = employeess);
    console.log("new employlee list details " + JSON.stringify(this.employeess));
  }

  onSelect(employee : EmployeeDetails) : void  {
    this.selectedEmployee = employee; 
  }

}
