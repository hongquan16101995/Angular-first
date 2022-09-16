import {Component, OnInit} from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = []
  studentForm!: FormGroup;

  constructor(private studentService: StudentService,
              private formGroup: FormBuilder) {
  }

  ngOnInit(): void {
    this.displayStudent()

    this.studentForm = this.formGroup.group({
      id: [''],
      name: [''],
      age: [''],
      address: [''],
    })
  }

  displayStudent() {
    this.studentService.findAll().subscribe(value => {
      this.students = value
    })
  }

  createStudent() {
    let student = {
      id: this.studentForm.value.id,
      name: this.studentForm.value.name,
      age: this.studentForm.value.age,
      address: this.studentForm.value.address
    }
    this.studentService.createStudent(student).subscribe(value => {
      document.getElementById("reset")!.click()
      this.displayStudent()
      console.log(value)
    })
  }
}
