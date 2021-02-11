import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core.service'

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
})
export class MaterialDetailComponent implements OnInit {
    dataDetail: any

    constructor(
        private api: CoreService
    ){
    }

    ngOnInit() {

        this.dataDetail = this.api.detailMaterial
        console.log("dataDetail-> ",this.dataDetail)
    }


}
