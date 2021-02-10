import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'app/eap/beans/course.bean';
import { CursoBean } from 'app/eap/beans/curso.bean';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.css']
})
export class CourseNewComponent implements OnInit {

  newCourse: CursoBean = new CursoBean();
  course: Course = new Course();

  constructor(
    public dialogRef: MatDialogRef<CourseNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CursoBean,
    private formBuilder: FormBuilder,

  ) { }

  registerForm = this.formBuilder.group({
    nombre: [''],
    codigo: [''],
    creditos: [0],
    tipo: [''],
    ciclo: [0]
  });

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  submit() {
    this.newCourse.nombre = this.registerForm.value.nombre;
    this.newCourse.codigo = this.registerForm.value.codigo;
    this.newCourse.creditos = this.registerForm.value.creditos;
    this.newCourse.ciclo = this.registerForm.value.ciclo;
    this.newCourse.tipo = this.registerForm.value.tipo;

    this.course.name = this.newCourse.nombre;
    this.course.credits = this.newCourse.creditos.toString();
    
    console.log('new course: ', this.newCourse);
    console.log('course: ', this.course);

    this.dialogRef.close(this.newCourse);

  }

}
