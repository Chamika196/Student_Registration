import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './features/student/student-list/student-list.component';
import { AddStudentComponent } from './features/student/add-student/add-student.component';
import { EditStudentComponent } from './features/student/edit-student/edit-student.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailComponent } from './features/student/student-detail/student-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    NavbarComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: '$', useValue: $ }],
  bootstrap: [AppComponent]
})
export class AppModule { }
