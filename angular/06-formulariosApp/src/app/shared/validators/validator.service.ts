import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';


  constructor() { }

   noPuedeSerStrider = (control: FormControl): ValidationErrors | null => {
    const valor:string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      // return Error!
      return {noStrider: null}
    }
    return null;
  }

  camposIguales(campo1:string, campo2:string){
    return ( formGroup:AbstractControl): ValidationErrors | null => {
      
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true}
      }

      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
