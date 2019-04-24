import { Component, OnInit } from '@angular/core';
import { userLoginService } from '../service/userLogin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class userLoginComponent {

constructor(
    private service: userLoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {  
}  

//for preview of image
imageUrl:String="/assets/image/default.jpg";
fileToUpload:File=null;

handleImageChange(file: FileList){
this.fileToUpload = file.item(0);

var reader = new FileReader();
  reader.onload=(event:any)=>{
  this.imageUrl=event.target.result;
  }
reader.readAsDataURL(this.fileToUpload);

}

  //file upload   
  upload(Image:any){
    let file: File = Image.files[0];
    this.service.uploadImage(file).subscribe(
      data=>{
        this.imageUrl="/assets/image/default.jpg"
        alert("successfully uploaded");
      }
    );
  }

  adminDashboard(){
    this.router.navigate(['/adminDashboard'])
  }
 
}



