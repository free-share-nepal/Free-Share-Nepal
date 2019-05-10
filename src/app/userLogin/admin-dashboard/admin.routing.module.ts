import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ImageUploadComponent } from '../admin-dashboard/image-upload/image-upload.component';
import { UpdateUploadComponent } from '../admin-dashboard/update-upload/update-upload.component';

const routes: Routes = [
    {
        path: 'adminDashboard', //<---- component declared here
        component: AdminDashboardComponent,
    },
    {
        path: 'adminDashboard/imageUpload',
        component: ImageUploadComponent
    },
    {
        path: 'adminDashboard/editUpload',
        component: UpdateUploadComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }