import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

const ELEMENT_DATA = [
  {
  "idCourse": 1,
  "name": "anatomia humana",
  "credits": "6",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 2,
  "name": "Introducción a la Tecnología Medica",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 3,
  "name": "Biomecánica de la Ocupación Humana",
  "credits": "5",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 4,
  "name": "Ocupación humana y Recursos Terapéuticos I",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 5,
  "name": "Kinesiología y Actividad Humana",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 6,
  "name": "Modelos de Intervención  Base a Neurociencia",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 7,
  "name": "Hematología I",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 8,
  "name": "Citología",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 9,
  "name": "Radiodiagnóstico",
  "credits": "4",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  },
  {
  "idCourse": 10,
  "name": "Radioanatomia",
  "credits": "5",
  "idCurriculum": 1,
  "curriculum": null,
  "contents": [],
  "enrollmentDetails": [],
  "labs": [],
  "tasks": []
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['idCourse', 'name', 'credits'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

}
