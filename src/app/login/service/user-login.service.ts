import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginBean } from '../bean/login.bean';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  getServiceUrl(): string {
    return './service/login'
  }

  constructor(
    private HttpClient: HttpClient
  ) { }

  sendAuthentification(loginBean: LoginBean) {
    return this.HttpClient.post(this.getServiceUrl(), loginBean);
  }
}
