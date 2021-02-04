import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EscuelaBean } from '../beans/escuela.bean';

@Injectable({
  providedIn: 'root'
})
export class EapService {

  // escuela: EscuelaBean;
  // private escuelaSubject = new Subject<EscuelaBean>();
  // escuelaObservable = this.escuelaSubject.asObservable();
  private _escuela: EscuelaBean = new EscuelaBean();
  
  newEscuela: EscuelaBean;
  private newEscuelaSubject = new Subject<EscuelaBean>();
  newEscuelaObservable = this.newEscuelaSubject.asObservable();

  constructor() { }

  setEscuelaData(escuela: EscuelaBean) {
    // this.escuela = escuela;
    // this.escuelaSubject.next(escuela);
    this._escuela = escuela;
  }

  getEscuelaData() {
    // return this.escuela;
    return this._escuela;
  }

  sendNewEscuela(newEscuela: EscuelaBean) {
    this.newEscuela = newEscuela;
    this.newEscuelaSubject.next(newEscuela);
  }

}
