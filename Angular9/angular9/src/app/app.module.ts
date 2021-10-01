import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TemplatevariableComponent } from './templatevariable/templatevariable.component';
import { DirectivesComponent } from './directives/directives.component';
import { Child1Component } from './child1/child1.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmpService } from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ClassbindingComponent,
    StylebindingComponent,
    TemplatevariableComponent,
    DirectivesComponent,
    Child1Component,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
