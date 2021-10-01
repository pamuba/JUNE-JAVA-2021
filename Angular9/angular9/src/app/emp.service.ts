import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from './employee';
import {of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private _url:string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(){
    //restfult api
    return this.http.get<IEmployee[]>(this._url)
    // return of(this.http.get<IEmployee[]>(this._url))
  }
}
