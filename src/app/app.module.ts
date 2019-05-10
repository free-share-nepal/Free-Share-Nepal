import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{ ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule,MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { userLoginComponent } from './userLogin/userLogin.component';
import { freeshareDashboardComponent } from './freeshareDashboard/freeshareDashboard.component';
import { AdminDashboardComponent } from './userLogin/admin-dashboard/admin-dashboard.component';
import { ImageUploadComponent } from './userLogin/admin-dashboard/image-upload/image-upload.component';
import { UpdateUploadComponent } from './userLogin/admin-dashboard/update-upload/update-upload.component';
import { AdminRoutingModule } from './userLogin/admin-dashboard/admin.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    userLoginComponent,
    freeshareDashboardComponent,
    AdminDashboardComponent,
    ImageUploadComponent,
    UpdateUploadComponent
  ],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    
    RouterModule.forRoot([
      {
        path:'',
        component: freeshareDashboardComponent 
      },
      {
        path:'freeshareDashboard',
         component: freeshareDashboardComponent
      },
      {
        path:'userLogin',
        component: userLoginComponent
      },
      // {
      //   path:'adminDashboard',
      //   component: AdminDashboardComponent
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
