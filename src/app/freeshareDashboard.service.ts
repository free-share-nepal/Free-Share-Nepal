import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { freeshareDashboardModule } from './freeshareDashboard/freeshareDashboard.module';
import { ProductModule } from './product/product.module';

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
        return this.http.get<ProductModule[]>(this.baseUrl+"GetAllProductDetails");
    }

    insertProduct(productName:ProductModule){
      return this.http.post(this.baseUrl+"InsertProductDetails",JSON.stringify(productName),this.httpOptions);
    }

    getProductById(id:number){
      return this.http.get<ProductModule[]>(this.baseUrl+"GetProductById/"+id);
    }

    updateProduct(productName:ProductModule){
      return this.http.put(this.baseUrl+"UpdateProductDetails",JSON.stringify(productName),this.httpOptions);
    }
    deleteProduct(id:number){
      return this.http.delete(this.baseUrl+"DeleteProduct/"+id);
    }
}
