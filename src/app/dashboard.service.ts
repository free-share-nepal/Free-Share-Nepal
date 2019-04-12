import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductModule } from './product/product.module';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:62215/api/product/";

  getAllProduct()
    {
        return this.http.get<ProductModule[]>(this.baseUrl+"GetAllProductDetails");
    }

    insertProduct(){

    }

    updateProduct(){

    }
    deleteProduct(id:number){
      return this.http.delete(this.baseUrl+"DeleteProduct");
    }
}
