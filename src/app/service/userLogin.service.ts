import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userLoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'ContentType' : "multipart/form-data"
    })
    };

    baseUrl:string="http://localhost:62215/api/product/";
   
    uploadImage(file:File){
      let formData:FormData = new FormData();
      formData.append("Image", file, file.name);
      return this.http.post(this.baseUrl+"UploadImage",formData,this.httpOptions);  
    }
}
