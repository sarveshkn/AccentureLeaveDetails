import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service'
import { EmployeeDetails } from '../EmployeeDetails';
import { LeavesDetails } from '../LeavesDetails';

@Component({
  selector: 'app-leave-complete-details',
  templateUrl: './leave-complete-details.component.html',
  styleUrls: ['./leave-complete-details.component.css']
})
export class LeaveCompleteDetailsComponent implements OnInit {

  employee: EmployeeDetails;

  leavesDetails : LeavesDetails;

  id : string;

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) { 
    }

  ngOnInit(): void {
    this.getEmployee();
  }
  
  getEmployee(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id is " + this.id);
    this.employeeService.getEmployee(this.id)
      .subscribe(employee => this.employee = employee);
      console.log("employee name " + this.employee);
      this.employee.leaveDetails = new LeavesDetails();
  }

  public addLeave() : void {
    console.log("Reached leaveComponent addLeave method" + this.employee.leaveDetails.startDate);
    this.employeeService.addLeaves(this.employee).subscribe();
  }

}
