import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { ImageUploadComponent } from '../admin-dashboard/image-upload/image-upload.component';
import { UpdateUploadComponent } from '../admin-dashboard/update-upload/update-upload.component';

const parentModuleRoutes: Routes = [
    {
        path: 'adminDashboard',            //<---- parent component declared here
        component: AdminDashboardComponent,
        children: [                          //<---- child components declared here
            {
                path:'imageUpload',
                component: ImageUploadComponent
            },
            {
                path:'editImageUpload',
                component: UpdateUploadComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(parentModuleRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class ParentRoutingModule { }