import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'app/core.service';
import { Course } from 'app/eap/beans/course.bean';
import { Curricula } from 'app/eap/beans/curricula.bean';
import { CursoBean } from 'app/eap/beans/curso.bean';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { MallaBean } from 'app/eap/beans/malla.bean';
import { ProfessionalSchool } from 'app/eap/beans/professional-school.bean';
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
  
  courses: Array<Course> = new Array<Course>();
  curricula: Array<Curricula> = new Array<Curricula>();
  professionalSchool: ProfessionalSchool = new ProfessionalSchool();
  viewType: string;
  professionalSchoolData: ProfessionalSchool = new ProfessionalSchool();

  isEditable = true;

  escuelaFormGroup: FormGroup;
  mallaFormGroup: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private eapService: EapService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {

    console.log('activatedRoute: ', this.activatedRoute.snapshot.routeConfig.path);
    this.viewType = this.activatedRoute.snapshot.routeConfig.path;
    //this.professionalSchoolData = this.activatedRoute.snapshot.paramMap.get('escuela');
    console.log('-> ', this.activatedRoute.snapshot.paramMap.get('escuela'));
    console.log('por servicio: ', this.eapService.getEscuelaData());

    if(this.viewType == 'new') {
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

    } else if( this.viewType == 'edit') {
      this.professionalSchoolData = this.eapService.getEscuelaData();

      this.escuelaFormGroup = this.formBuilder.group({
        // firstCtrl: ['', Validators.required]
        nombre: [this.professionalSchoolData.name],
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

    //new json
    this.cursosList.forEach(e => {
      let c: Course = new Course();
      c.name = e.nombre;
      c.credits = e.creditos.toString();

      this.courses.push(c);
    });

    let curriculaAux: Curricula = new Curricula();
    curriculaAux.name = this.mallaBean.nombre;
    curriculaAux.amountCredits = this.mallaBean.creditajeTotal;
    curriculaAux.courses = this.courses;

    this.curricula.push(curriculaAux);

    this.professionalSchool.name = this.escuelaBean.nombre;
    this.professionalSchool.curricula = this.curricula;

    this.coreService.saveNewProfessionalSchool(this.professionalSchool);

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
