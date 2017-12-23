import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Observable } from 'rxjs/observable';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData().subscribe(data => console.log(data));
  }

}
