import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  displayName = true
  public color = "asdas"

  public colors = ['red', 'green', 'blue', 'yellow']

  ngOnInit(): void {
  }

}
