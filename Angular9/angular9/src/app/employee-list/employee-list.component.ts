import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: [
  ],
  providers:[]
})
export class EmployeeListComponent implements OnInit {

  public employees:any []

  constructor(private _empServive: EmpService) { }

  ngOnInit(): void {
   this._empServive.getEmployees()
                    .subscribe(data => this.employees = data)
  }

}
