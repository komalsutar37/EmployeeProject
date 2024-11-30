import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeelist: Employee[]
  constructor() {
    this.employeelist=[]

  }
  postEmployee(emp: Employee) {
    emp.id = this.employeelist.length + 1
    this.employeelist.push(emp)
    return 'Employee add '
  }

  getEmployeeList() {
    return this.employeelist
  }

  getEmployeeById(id: number) {
    return this.employeelist.find(x => x.id == id)
  }
}
