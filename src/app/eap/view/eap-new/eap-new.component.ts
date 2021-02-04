import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CursoBean } from 'app/eap/beans/curso.bean';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { MallaBean } from 'app/eap/beans/malla.bean';
import { EapService } from 'app/eap/services/eap.service';
import { CourseNewComponent } from '../course-new/course-new.component';

@Component({
  selector: 'app-eap-new',
  templateUrl: './eap-new.component.html',
  styleUrls: ['./eap-new.component.css']
})
export class EapNewComponent implements OnInit {

  escuelaBean: EscuelaBean = new EscuelaBean();
  mallaBean: MallaBean = new MallaBean();
  curso: CursoBean = new CursoBean();
  @ViewChild(MatTable) table: MatTable<any>; 

  cursosList: Array<CursoBean> = new Array<CursoBean>();
  displayedColumns: string[] = ['id', 'nombre', 'codigo', 'creditos', 'tipo', 'ciclo'];
  
  isEditable = true;

  escuelaFormGroup: FormGroup;
  mallaFormGroup: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private eapService: EapService
  ) { }

  // registerForm = this.formBuilder.group({
  //   nombre: [''],
  //   fechaCreacion: [''],
  //   mision: [''],
  //   vision: [''],
  //   director: [''],
    // nombreMalla: [''],
    // fechaCreacionMalla: [''],
    // fechaVigenciaMalla: [''],
    // creditajeTotal: [''],
    // numeroCiclos: [''],

  // });

  ngOnInit(): void {
    this.cursosList = [
      { 
        "id": 1,
        "nombre": "Cálculo I",
        "codigo": "1234ABCD",
        "creditos": 3,
        "tipo": "obligatiorio",
        "ciclo": 1
      },
      {
        "id": 2,
        "nombre": "Matemáticas Discretas",
        "codigo": "5678EFGH",
        "creditos": 3,
        "tipo": "obligatiorio",
        "ciclo": 2
      }
    ];

    this.escuelaFormGroup = this.formBuilder.group({
      // firstCtrl: ['', Validators.required]
      nombre: [''],
      fechaCreacion: [new Date()],
      resolucion: [''],
      mision: [''],
      vision: [''],
      director: [''],
    });
    this.mallaFormGroup = this.formBuilder.group({
      // secondCtrl: ['', Validators.required]
      nombre: [''],
      codigo: [''],
      fechaCreacion: [new Date()],
      fechaVigencia: [''],
      creditajeTotal: [''],
      numeroCiclos: [''],
    });
  }

  onSubmit() {
    this.mallaBean = new MallaBean();
    this.escuelaBean = new EscuelaBean();

    this.escuelaBean.nombre = this.escuelaFormGroup.value.nombre;
    this.escuelaBean.fechaCreacion = this.escuelaFormGroup.value.fechaCreacion;
    this.escuelaBean.resolucion = this.escuelaFormGroup.value.resolucion;
    this.escuelaBean.mision = this.escuelaFormGroup.value.mision;
    this.escuelaBean.vision = this.escuelaFormGroup.value.vision;
    this.escuelaBean.director = this.escuelaFormGroup.value.director;
    this.escuelaBean.mallas = [];

    this.mallaBean.id = 0;
    this.mallaBean.activa = true;
    this.mallaBean.nombre = this.mallaFormGroup.value.nombre;
    this.mallaBean.codigo = this.mallaFormGroup.value.codigo;
    this.mallaBean.fechaCreacion = this.mallaFormGroup.value.fechaCreacion;
    this.mallaBean.vigencia = this.mallaFormGroup.value.fechaVigencia;
    this.mallaBean.creditajeTotal = this.mallaFormGroup.value.creditajeTotal;
    this.mallaBean.numeroCiclos = this.mallaFormGroup.value.numeroCiclos;
    
    this.escuelaBean.mallas.push(this.mallaBean);

    console.log('escuelaBean: ', this.escuelaBean);
    console.log('mallaBean: ', this.mallaBean);

    // this.eapService.setEscuelaData(this.escuelaBean);
    this.eapService.sendNewEscuela(this.escuelaBean);

    this.router.navigate(['/eap']);
  }

  newCourse() {
    
    const dialogRef = this.dialog.open(CourseNewComponent, {
      width: '100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.curso = result as CursoBean;
      console.log('curso retorned: ', this.curso);
      const i = this.cursosList.length;
      this.cursosList.push(
        {
          id: i+1,
          nombre: this.curso.nombre,
          codigo: this.curso.codigo,
          creditos: this.curso.creditos,
          tipo: this.curso.tipo,
          ciclo: this.curso.ciclo
        }
      );
      this.table.renderRows();
      console.log('coursesList: ', this.cursosList);

    });
    
  }

}
