import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeform: FormGroup

  constructor(private fb: FormBuilder, private ser: EmployeeService) {
    this.employeeform = this.fb.group({

      "id": ['', [Validators.required]],
      "name": ['', [Validators.required]],
      "email": ['', [Validators.required]],
      "department": ['', [Validators.required]],
      "designation": ['', [Validators.required]]
      
    })
  }

  ngOnInit(): void {
  }
  FormSubmit() {
    this.ser.postEmployee(this.employeeform.value)
    this.employeeform.reset()
  }
 
}
