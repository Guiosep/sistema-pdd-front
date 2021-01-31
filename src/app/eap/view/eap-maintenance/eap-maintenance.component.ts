import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { EapService } from 'app/eap/services/eap.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const ELEMENT_DATA: EscuelaBean[] = [
  { 
    id: 1,
    nombre: "EAP Ingeniería de Software",
    fechaCreacion: "01/01/2009",
    mision: "Generar y difundir conocimiento científico, tecnológico y humanístico, formando profesionales e investigadores líderes, con valores y respetuosos de la diversidad cultural; promotores de la identidad nacional basada en una cultura de calidad y responsabilidad social para contribuir al desarrollo sostenible del país y la sociedad.",
    vision: "Ser una Facultad referente de excelencia y calidad en la formación profesional e investigación en las ingenierías de Sistemas, de Software y de Ciencias de la Computación, reconocida nacional e internacionalmente, que aporta al desarrollo sostenible y tecnológico del país.",
    director: "El pinguino",
    mallas: [
      { 
        id: 1,
        codigo: "1234ABCDE",
        nombre: "malla 2009",
        fechaCreacion: "01/01/2009",
        vigencia: "31/12/2019",
        creditajeTotal: 200,
        numeroCiclos: 10,
        activa: false,
        cursos: [
          { 
            id: 1,
            nombre: "Cálculo I",
            codigo: "1234ABCD",
            creditos: 3,
            tipo: "obligatiorio",
            ciclo: 1
          },
          {
            id: 2,
            nombre: "Matemáticas Discretas",
            codigo: "5678EFGH",
            creditos: 3,
            tipo: "obligatiorio",
            ciclo: 2
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-eap-maintenance',
  templateUrl: './eap-maintenance.component.html',
  styleUrls: ['./eap-maintenance.component.css']
})
export class EapMaintenanceComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'creacion', 'mallas', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(
    private route: Router,
    private eapService: EapService
  ) { }

  ngOnInit(): void {
  }

  onView(escuela: EscuelaBean){
    console.log('view Escuela: ', escuela);
    this.eapService.setEscuelaData(escuela);
    this.route.navigate(['/eap-detail']);
  }

  onEdit(escuela: EscuelaBean) {
    console.log('edit Escuela: ', escuela);
  }

  onDelete(escuela: EscuelaBean) {
    console.log('delete Escuela: ', escuela);
  }

}
