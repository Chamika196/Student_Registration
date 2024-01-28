import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddStudent } from '../model/add-student.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent implements OnDestroy {
  model: AddStudent;
  private addStudentSubscription?: Subscription;
  constructor(private studentservice: StudentService, private router: Router) {
    this.model = {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      nic: '',
      profileImage: '',
      dateOfBirth: new Date(),
      address: '',
    };
  }

  onFormSubmit(){
    this.studentservice.createStudent(this.model)
    .subscribe({
      next:(response) => {
        this.router.navigateByUrl('/students');
      }
    })
  }
  
  ngOnDestroy(): void {
    this.addStudentSubscription?.unsubscribe();
  }
  
}
