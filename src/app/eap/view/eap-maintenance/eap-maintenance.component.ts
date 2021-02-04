import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { EapService } from 'app/eap/services/eap.service';
@Component({
  selector: 'app-eap-maintenance',
  templateUrl: './eap-maintenance.component.html',
  styleUrls: ['./eap-maintenance.component.css']
})
export class EapMaintenanceComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'creacion', 'mallas', 'actions'];
  dataSource : Array<EscuelaBean> = [
    { 
      id: 1,
      nombre: "EAP Ingeniería de Software",
      fechaCreacion: "01/01/2009",
      resolucion: "EAP-ISW-1234",
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
        },
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
  @ViewChild(MatTable) table: MatTable<any>; 

  constructor(
    private route: Router,
    private eapService: EapService
  ) { }

  ngOnInit(): void {
    
    //let aux: EscuelaBean = this.eapService.getEscuelaData();
    this.eapService.newEscuelaObservable.subscribe(response => {
      let aux = response as EscuelaBean;
      console.log('aux: ', aux);
      this.dataSource.push(aux);
      console.log('datasource: ', this.dataSource);

    });
    // console.log('aux: ', aux);
    // if(Object.keys(aux).length != 0) {
    //   this.dataSource.push(aux);
    //   //this.table.renderRows();
    // }
    //this.eapService.setEscuelaData(new EscuelaBean());
    //console.log('datasource: ', this.dataSource);
  }

  onView(escuela: EscuelaBean){
    this.eapService.setEscuelaData(escuela);
    this.route.navigate(['/eap-detail']);
  }

  onEdit(escuela: EscuelaBean) {
    console.log('edit Escuela: ', escuela);
    this.route.navigate(['/edit']);
  }

  onDelete(escuela: EscuelaBean) {
    console.log('delete Escuela: ', escuela);
  }

  onNew() {
    this.route.navigate(['/new']);
  }

}
