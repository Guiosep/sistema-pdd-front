import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoBean } from 'app/eap/beans/curso.bean';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { MallaBean } from 'app/eap/beans/malla.bean';
import { EapService } from 'app/eap/services/eap.service';
import { CoursesDetailComponent } from '../courses-detail/courses-detail.component';

@Component({
  selector: 'app-eap-detail',
  templateUrl: './eap-detail.component.html',
  styleUrls: ['./eap-detail.component.css']
})
export class EapDetailComponent implements OnInit {

  escuela: EscuelaBean = new EscuelaBean();
  mallas: Array<MallaBean> = new Array<MallaBean>();
  cursos: Array<CursoBean> = new Array<CursoBean>();
  message: string = '';
  panelOpenState = false;

  constructor(
    private eapService: EapService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.escuela = this.eapService.getEscuelaData();
    console.log('escuela: ', this.escuela);
    this.mallas = this.escuela.mallas;
    console.log('mallas: ', this.mallas);
    this.message = JSON.stringify(this.escuela);
  }

  openCourses(malla: MallaBean) {
    console.log('malla: ', malla);
    const dialogRef = this.dialog.open(CoursesDetailComponent, {
      width: '100%',
      data: malla
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
