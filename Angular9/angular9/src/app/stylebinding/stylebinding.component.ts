import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
    <h2 [style.color]="'orange'" >Hello World</h2>
    <h2 [style.color]="hasError? 'orange' : 'red'" >Hello World</h2>
    <h2 [style.color]="highlightColor" >Hello World</h2>
    <h2 [ngStyle]="titleStyle" >Hello World</h2>
  `,
  styles: [
  ]
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  hasError = true;

  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }

 
  highlightColor = 'violet'

  ngOnInit(): void {
  }

}
