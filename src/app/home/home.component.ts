import { Component} from '@angular/core';
import { HomeService } from '../home.service';
import {RouterModule,Router} from '@angular/router';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  names: string[]=['Manish','Hari','Dipisha','Bibek','Keshav'];

  constructor(private service:HomeService, 
              private router:Router) { }

  show(){
    this.router.navigate(["form"]);
  }

  form = new FormGroup({
      name : new FormArray([])
  });

insert(){
  alert('insert');
}

view(){
  alert('display');
}

delete(){
  alert('delete');
}

// form; formbuilder to write in shorter way
// constructor (public router: Router, fb:FormBuilder){
//   this.form = fb.group({
//               name:['','validators.required'],
//               contact: fb.group({
//                               email:[],
//                               phone:[]
//                               }),
//               topics: fb.array([])
//                     });
//                   }

}
