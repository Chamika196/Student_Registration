import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) {}

  Student: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: true,
      language: {
        searchPlaceholder: 'Text Student',
      },
    };
    this.LoadInvoice();
  }
  LoadInvoice() {
    this.studentService.getAllStudents().subscribe((res) => {
      this.Student = res;
      this.dtTrigger.next(null);
    });
  }
  // Method to navigate to the student detail page
  viewStudentDetail(studentId: number): void {
    // Navigate to the student detail page with the studentId as a route parameter
    this.router.navigate(['/student/detail', studentId]);
  }
}
