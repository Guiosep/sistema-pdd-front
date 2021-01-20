import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginBean } from 'app/login/bean/login.bean';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  hide: boolean = true;
  // disabled: boolean = true;
  loginBean: LoginBean = new LoginBean();

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  registerForm = this.formBuilder.group({
    username: [
      '', 
      {
        validators: [
          Validators.required,
          Validators.pattern(/^[a-z][a-z]*$/)
        ]
      }
    ],
    password: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9]*$/)]]
  });

  ngOnInit(): void {
  }

  submit() {
    console.log('aea');
    console.log(this.registerForm.value);
    this.loginBean.username = this.registerForm.value.username;
    this.loginBean.password = this.registerForm.value.password;
    console.log('loginBean: ', this.loginBean);
    console.log('->', this.registerForm.value.username.valid);

    if(this.loginBean.username != '' && this.loginBean.password != '') {
      this.route.navigate(['/dashboard']);
    }
  }


  getError(name: any) {
    if (this.registerForm.controls[name].hasError('required')) {
      return 'The field is required';
    } else if (this.registerForm.controls[name].errors.minLength) {
      return 'Is too low';
    }  else if (this.registerForm.controls[name].errors.pattern) {
      return 'no cumple con la regex'
    }

  }

}