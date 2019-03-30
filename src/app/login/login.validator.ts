import { AbstractControl, ValidationErrors } from '@angular/forms';

export class LoginValidator{
     static cannotContainWhiteSpace(control:AbstractControl): ValidationErrors | null{
     if((control.value as string).indexOf(" ") >=0){
         return {cannotContainWhiteSpace :true};

        //  return {
        //      minlength:{
        //          requiredLength:10,
        //          actualLength: control.value
        //      }
        //  }
     }   
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null{
        if((control.value == 'admin'))
        return {shouldBeUnique : true};

        return null;
    }

    //for asynchronous call
    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
    //     return new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 if(control.value == 'admin')
    //                     resolve ({shouldBeUniques : true});
    //                 else
    //                      resolve (null);
    //             },5000);
    //         });
    // }
}