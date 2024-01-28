import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the studentId from the route parameters
    const studentId = this.route.snapshot.paramMap.get('studentId');
    if (studentId) {
      // Load the details of the specific student
      this.studentService.getStudentById(studentId).subscribe(student => {
        this.student = student;
      });
    }
  }
  goBack() {
    this.router.navigate(['/students']);
    }
}
