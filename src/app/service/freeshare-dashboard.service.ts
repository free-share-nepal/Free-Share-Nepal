import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class freeshareDashboardService {
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };


  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:62215/api/product/";

  
  getAllProduct()
    {
        return this.http.get<Product[]>(this.baseUrl+"GetAllProductDetails");
    }

    insertProduct(productName:Product){
      return this.http.post(this.baseUrl+"InsertProductDetails",JSON.stringify(productName),this.httpOptions);
    }

    getProductById(id:number){
      return this.http.get<Product[]>(this.baseUrl+"GetProductById/"+id);
    }

    updateProduct(productName:Product){
      return this.http.put(this.baseUrl+"UpdateProductDetails",JSON.stringify(productName),this.httpOptions);
    }
    deleteProduct(id:number){
      return this.http.delete(this.baseUrl+"DeleteProduct/"+id);
    }
}
