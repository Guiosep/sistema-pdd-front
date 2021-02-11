import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoreService } from 'app/core.service';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { ProfessionalSchool } from 'app/eap/beans/professional-school.bean';
import { EapService } from 'app/eap/services/eap.service';
import { EapwebService } from 'app/eap/services/eapweb.service';
@Component({
  selector: 'app-eap-maintenance',
  templateUrl: './eap-maintenance.component.html',
  styleUrls: ['./eap-maintenance.component.css']
})
export class EapMaintenanceComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'curricula', 'users', 'actions'];
  dataSource: Array<ProfessionalSchool> = new Array<ProfessionalSchool>();
  
  @ViewChild(MatTable) table: MatTable<any>; 

  constructor(
    private route: Router,
    private eapService: EapService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {

    this.coreService.getProfessionalSchools().subscribe(result => {
      
      this.dataSource = result as Array<ProfessionalSchool>;
      console.log('datasource: ', this.dataSource);
    });
  }

  onView(escuela: ProfessionalSchool){
    this.eapService.setEscuelaData(escuela);
    this.route.navigate(['/eap-detail']);
  }

  onEdit(escuela: ProfessionalSchool) {
    console.log('edit Escuela: ', escuela);
    this.eapService.setEscuelaData(escuela);
    this.route.navigate(['/edit', escuela]);
  }

  onDelete(escuela: ProfessionalSchool) {
    console.log('delete Escuela: ', escuela.idProfessionalSchool);
    this.coreService.deleteProfessionalSchool(escuela.idProfessionalSchool).subscribe( result => {
      console.log(result);
    });
  }

  onNew() {
    this.route.navigate(['/new']);
  }

}
