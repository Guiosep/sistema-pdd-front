import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as THREE from 'three';
//import { LaboratorioService } from '../core/api'

const ELEMENT_DATA = [
  {
  "idLab": 1,
  "name": "Anatomía topográfica",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 2,
  "name": "El Brazo",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 3,
  "name": "Región del codo",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 4,
  "name": "Antebrazo",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 5,
  "name": "Región de la muñeca",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 6,
  "name": "Columna Vertebral",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 7,
  "name": "Médula espinal",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 8,
  "name": "Región dorsal y nuca",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 9,
  "name": "Anatomía de superficie",
  "idCourse": 1,
  "course": null
  },
  {
  "idLab": 10,
  "name": "Huesos de la cabeza",
  "idCourse": 1,
  "course": null
  }
];

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html'
})
export class LaboratoryComponent implements OnInit {

  displayedColumns: string[] = ['idLab', 'name'];
  dataSource = ELEMENT_DATA;

  constructor(
        //private labServ: LaboratorioService
    ){}

  ngOnInit() {	
    this.cargarLaboratorios()
  }

  async cargarLaboratorios(){

    //let labs = await this.labServ.listarLaboratorios()

    //console.log("labs-> ",labs)
  }

}
