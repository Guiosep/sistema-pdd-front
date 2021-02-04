import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class LaboratoryDetailComponent implements OnInit {

  constructor(
      private api: CoreService
    ){
  }

  ngOnInit() {	
 
  	let data = this.api.detailLaboratory
  	console.log("Data-> ",data)

  }
  

}
