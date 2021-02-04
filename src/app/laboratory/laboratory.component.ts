import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
})
export class LaboratoryComponent implements OnInit {

  displayedColumns: string[] = ['idLab', 'name', 'actions'];
  listLabs: any

  constructor(
      private route: Router,
      private api: CoreService
    ){
  }

  ngOnInit() {	
    this.cargarLaboratorios()

  }

  cargarLaboratorios(){

    this.api.listarLaboratorios().subscribe((data)=>{
      this.listLabs = data;
              console.log("labs-> ",data)
    })  

  }

  onView(laboratorio){

      this.api.detailLaboratory = laboratorio

      this.route.navigate(['/laboratory-detail']);
  }

  

}
