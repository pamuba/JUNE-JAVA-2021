import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selcted department with id =  {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a> &nbsp;&nbsp;&nbsp;
    <a (click)="goNext()">Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id = parseInt(param.get('id'))
      this.departmentId = id
    })
  }
  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId])
  }
  goNext(){
    let previousId = this.departmentId +1;
    this.router.navigate(['/departments', previousId])
  }

}
