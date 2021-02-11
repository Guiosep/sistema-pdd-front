import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class LaboratoryDetailComponent implements OnInit {
    dataDetail: any

  constructor(
      private api: CoreService
    ){
  }

  ngOnInit() {

  	this.dataDetail = this.api.detailLaboratory

  }


}
