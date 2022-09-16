import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("http://localhost:8081/students")
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>("http://localhost:8081/students", student)
  }
}
