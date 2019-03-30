import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // username: string;
  // password: string;
  // loginForm: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(credentials){
    if(credentials.username=='admin' && credentials.password=='admin'){
      this.router.navigate(["home"]);
    }
  }
  // login(username:string, password:string){
  //   // console.log(username,password);
  //   if(username == 'admin' && password == 'admin'){
  //     this.router.navigate(["home"]);
  //    }else {
  //      alert("Invalid credentials");
  //    }
  // }

}
