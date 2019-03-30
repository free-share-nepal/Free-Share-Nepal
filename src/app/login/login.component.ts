import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidator } from './login.validator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  loginForm=new FormGroup({

    // account: new FormGroup({
      username: new FormControl('',[
        Validators.required,
        LoginValidator.cannotContainWhiteSpace,
        LoginValidator.shouldBeUnique
      ]),
      password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
      ])
    // })
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  login(credentials){
    if(credentials.username=='admins' && credentials.password=='admin12345'){
      this.route.navigate(['home']);
    }
    else{
      this.loginForm.setErrors({
        invalidlogin:true
    });
    }
  }
}
