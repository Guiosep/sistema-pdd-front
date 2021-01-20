import { Component, OnInit } from '@angular/core';
import { EscuelaBean } from 'app/eap/beans/escuela.bean';
import { MallaBean } from 'app/eap/beans/malla.bean';
import { EapService } from 'app/eap/services/eap.service';

@Component({
  selector: 'app-eap-detail',
  templateUrl: './eap-detail.component.html',
  styleUrls: ['./eap-detail.component.css']
})
export class EapDetailComponent implements OnInit {

  escuela: EscuelaBean = new EscuelaBean();
  mallas: Array<MallaBean> = new Array<MallaBean>();
  message: string = '';

  constructor(
    private eapService: EapService
  ) { }

  ngOnInit(): void {
    this.escuela = this.eapService.getEscuelaData();
    console.log('escuela: ', this.escuela);
    this.mallas = this.escuela.mallas;
    console.log('mallas: ', this.mallas);
    this.message = JSON.stringify(this.escuela);
  }

}
