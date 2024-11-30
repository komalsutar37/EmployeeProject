import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  employeelist: Employee[];
  serachlist: Employee[];
  searchTerm = "";
  constructor(private ser: EmployeeService) {
    this.employeelist = [];
    this.serachlist = [];
  }

  ngOnInit(): void {
    this.empList();
    this.serachlist = this.employeelist;
  }
  empList() {
    this.employeelist = this.ser.getEmployeeList()
    
  }
  onKeyPress(event: any) {
    this.searchTerm = event.target.value;
    if (this.searchTerm.length > 0) {

      return this.serachlist = this.employeelist.filter(employee =>
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.designation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    else {
      return this.serachlist =this.employeelist;
    }
  }
}
