import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EapwebService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProfessionalSchools(): Observable<any> {
    return this.httpClient.get<any>('/api/ProfessionalSchools');
  }
}
