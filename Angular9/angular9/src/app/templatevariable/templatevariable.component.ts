import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariable',
  template: `
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log Mesg</button>
  `,
  styles: [
  ]
})
export class TemplatevariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(msg){
    console.log(msg)
  }

}
