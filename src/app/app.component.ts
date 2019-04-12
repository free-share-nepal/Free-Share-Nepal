import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

    check(){
    alert();
  }

    show(){
      alert();
    }
  
}

export function checkIfPositive(number: any){

  if(number >0 )
    return true;

    return false;
}
