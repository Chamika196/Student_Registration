import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './features/student/student-list/student-list.component';
import { EditStudentComponent } from './features/student/edit-student/edit-student.component';
import { AddStudentComponent } from './features/student/add-student/add-student.component';
import { StudentDetailComponent } from './features/student/student-detail/student-detail.component';

const routes: Routes = [
  {
    path:'students',
    component:StudentListComponent
  },
  {
    path:'student/edit/:id',
    component:EditStudentComponent
  },
  {
    path:'students/add',
    component:AddStudentComponent
  },
  {
    path:'student/detail/:studentId',
    component:StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
