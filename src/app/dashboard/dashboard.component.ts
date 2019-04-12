import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardModule } from './dashboard.module';
import { ProductModule } from '../product/product.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:DashboardService) { }

  ngOnInit() {
   this.getAllProduct(); 
  }


  lists:ProductModule[];
  displayedColumns: string[] = ['id', 'product','deleted','action'];

  getAllProduct(){
   this.service.getAllProduct().subscribe
    (data => this.lists = data);
  }

  insertProduct(productName:string){
    alert(productName);
  }

  updateProduct(id:number){
    alert(id);
  }

  deleteProduct(id:number){
    this.service.deleteProduct(id).subscribe(
      this.ngOnInit
    );
  }
  
} 