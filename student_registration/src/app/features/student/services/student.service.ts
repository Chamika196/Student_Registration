import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddStudent } from '../model/add-student.model';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { environment } from '../../../../environments/environment';
import { UpdateStudent } from '../model/update-student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  createStudent(data: AddStudent):Observable<Student>{
    return this.http.post<Student>(`${environment.apiBaseUrl}/api/student`,data);
  }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiBaseUrl}/api/student`);
  }

  getStudentById(id:string):Observable<Student>{
    return this.http.get<Student>(`${environment.apiBaseUrl}/api/student/${id}`);
  }

  updateStudent(id:string, updateStudent:UpdateStudent):Observable<Student>{
    return this.http.put<Student>(`${environment.apiBaseUrl}/api/student/${id}`,updateStudent);
  }

  deleteStudent(id:string):Observable<Student>{
    return this.http.delete<Student>(`${environment.apiBaseUrl}/api/student/${id}`);
  }
}
