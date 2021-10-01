import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>Deparment List</h3>
   <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
   </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Azure"},
    {"id":5, "name":"Snow Flake"},
    {"id":6, "name":"React"},
    {"id":7, "name":"Data Lake"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }

}
