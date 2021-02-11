import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessionalSchool } from './eap/beans/professional-school.bean';
import { LoginBean } from './login/bean/login.bean';

@Injectable()
export class CoreService {

  constructor(
  	 private httpClient: HttpClient
	) { }

	listarLaboratorios(): Observable<any>{
		return this.httpClient.get<any>('/api/Labs');
	}

	listarCursos(): Observable<any>{
		return this.httpClient.get<any>('/api/Courses');
	}

    listarTareas(): Observable<any>{
        return this.httpClient.get<any>('/api/Tareas');
    }

    get detailLaboratory() {
        return this.getObject('detailLaboratory')
    }

    set detailLaboratory(laboratory) {
    console.log("laboratory-> ",laboratory)
        if (laboratory) {
            this.setObject('detailLaboratory', laboratory)
        }
    }

    get detailMaterial() {
        return this.getObject('detailMaterial')
    }

    set detailMaterial(material) {
        console.log("material-> ",material)
        if (material) {
            this.setObject('detailMaterial', material)
        }
    }

	//parameters locale
    private set(key, value) {
        localStorage[key] = value
    }

    private get(key, defaultValue = undefined) {
        return localStorage[key] || defaultValue
    }

    private setObject(key, value) {
        localStorage[key] = JSON.stringify(value)
    }

    private getObject(key) {
        return JSON.parse(localStorage[key] || 'null')
    }

    //Professional Schools
    getProfessionalSchools(): Observable<any> {
        return this.httpClient.get<any>('/api/ProfessionalSchools');
    }

    saveNewProfessionalSchool(ps: ProfessionalSchool): Observable<any> {
        return this.httpClient.post('/api/ProfessionalSchools', ps);
    }

    deleteProfessionalSchool(id: number): Observable<any> {
        return this.httpClient.delete('/api/ProfessionalSchools/'+id);
    }

    //Login
    sendCredentials(loginBean: LoginBean): Observable<any> {
        return this.httpClient.post('/api/signin', loginBean);
    }

}
