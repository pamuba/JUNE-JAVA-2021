import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2> {{name}} </h2>
    <h2> {{name | lowercase}} </h2>
    <h2> {{name | uppercase}} </h2>
    <h2> {{name | titlecase}} </h2>
    <h2> {{name | slice:3}} </h2>
    <h2> {{name | slice:3:5}} </h2>
    <h2> {{ person | json }} </h2>

    <h2>{{5.678 | number: '1.2-3'}}</h2>
    <h2>{{5.678 | number: '3.5-7'}}</h2>
    <h2>{{5555.678 | number: '2.1-2'}}</h2>

    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency : 'EUR'}}</h2>
    <h2>{{ 0.25 | currency : 'INR'}}</h2>
    <h2>{{ 0.25 | currency : '£'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  name = "John Wick"

  date = new Date(); // 2 things

  person = {
    firstName:"Billy",
    lastName:"Jane"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
