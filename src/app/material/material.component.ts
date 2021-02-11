import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit {
  displayedColumns: string[] = ['idTask', 'title', 'limitDate', 'actions'];
  listTareas: any

  constructor(
      private route: Router,
      private api: CoreService
  ) { }

  ngOnInit() {
    this.cargarTareas()
  }

  cargarTareas() {

    this.api.listarTareas().subscribe((data)=>{
      this.listTareas = data;
      console.log("Tareas-> ",data)
    })

  }

  onView(tarea){

    this.api.detailMaterial = tarea

    this.route.navigate(['/material-detail']);
  }

}
