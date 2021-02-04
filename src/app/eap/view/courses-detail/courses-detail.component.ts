import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoBean } from 'app/eap/beans/curso.bean';
import { MallaBean } from 'app/eap/beans/malla.bean';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  malla: MallaBean =  new MallaBean();
  cursos: Array<CursoBean> = new Array<CursoBean>();

  constructor(
    public dialogRef: MatDialogRef<CoursesDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MallaBean
  ) { }

  ngOnInit(): void {
    this.malla = this.data;
    this.cursos = this.malla.cursos;
  }

  onClose() {
    this.dialogRef.close();
  }

}
