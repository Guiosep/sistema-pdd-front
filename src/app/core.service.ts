import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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


    get detailLaboratory() {
        return this.getObject('detailLaboratory')
    }

    set detailLaboratory(laboratory) {
    console.log("laboratory-> ",laboratory)
        if (laboratory) {
            this.setObject('detailLaboratory', laboratory)
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
}
