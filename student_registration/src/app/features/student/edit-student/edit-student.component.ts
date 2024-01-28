import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UpdateStudent } from '../model/update-student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent implements OnInit, OnDestroy {
  id: string | null = null;
  model?: Student;

  paramsSubcription?: Subscription;
  routeSubscription?: Subscription;
  updateStudentSubscription?: Subscription;
  getStudentSubscription?: Subscription;
  deleteStudentSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        //get student from API
        if (this.id) {
          this.getStudentSubscription = this.studentService
            .getStudentById(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
                
              },
            });
        }
      },
    });
  }

  onFormSubmit() {
    //convert this model to Request Object
    if (this.model && this.id) {
      var updateStudent: UpdateStudent = {
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        mobile: this.model.mobile,
        email: this.model.email,
        nic: this.model.nic,
        profileImage: this.model.profileImage,
        dateOfBirth: this.model.dateOfBirth,
        address: this.model.address,
      };

      this.updateStudentSubscription = this.studentService.updateStudent(this.id,updateStudent)
      .subscribe({
        next:(response) =>{
          this.router.navigateByUrl('/students');
        }
      });
    }
  }

  onDelete():void{
    if(this.id)
    {
      //call service and delete stuednt

      this.deleteStudentSubscription = this.studentService.deleteStudent(this.id)
      .subscribe({
        next:(response) => {
          this.router.navigateByUrl('/students');
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateStudentSubscription?.unsubscribe();
    this.getStudentSubscription?.unsubscribe();
    this.deleteStudentSubscription?.unsubscribe();

  }
}
