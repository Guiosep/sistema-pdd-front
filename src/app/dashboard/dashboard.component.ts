import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['idCourse', 'name', 'credits', 'actions'];
  listCourses: any

  constructor(
      private api: CoreService
    ) { }

  ngOnInit() {
    this.cargarCursos()
  }

  cargarCursos(){

    this.api.listarCursos().subscribe((data)=>{
      this.listCourses = data;
              console.log("listCourses-> ",data)
    })  

  }


}
