import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input('parentData') public data
  @Output() public childEvent = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Data from Child')
  }

}
