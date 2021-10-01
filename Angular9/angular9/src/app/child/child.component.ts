import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>The Child component</h2>
    <input [id]="myId" type="text" value="Angular" />
    <input id="{{myId}}" type="text" value="Angular" /><br>
    <input *ngIf ="isOn" [disabled]="!isOn" id="{{myId}}" type="text" value="Angular" />Hiii<br>
    <h1 *ngIf="isOn">
      <ng-template></ng-template>
    </h1>
  `,
  styles: [``]
})
export class ChildComponent implements OnInit {

  myId = "ID"
  isOn = true
  constructor() { }

  ngOnInit(): void {
  }

}
