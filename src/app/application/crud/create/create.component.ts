import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employeeToSave: Employee;

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form2: NgForm){
    console.log(form2.value.fn)
    this.employeeToSave = new Employee();
    this.employeeToSave.id = form2.value.id
    this.employeeToSave.fn = form2.value.fn
    this.employeeToSave.ln = form2.value.ln
    this.employeeToSave.email = form2.value.email
    this.service.save(this.employeeToSave);
  }

}
