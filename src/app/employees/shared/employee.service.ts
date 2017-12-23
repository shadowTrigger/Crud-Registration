import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable()
export class EmployeeService {

  employeeList: Employee[];
  selectedEmployee: Employee = new Employee();

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://eployeeregister.firebaseio.com/employees.json');
  }

  insertEmployee(form: NgForm) {
    return this.http.put('https://eployeeregister.firebaseio.com/employees.json', { form });
  }
}
