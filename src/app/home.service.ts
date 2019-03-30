import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userUrl = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }

  show(){
    return this.http.get(this.userUrl);
  }
}
