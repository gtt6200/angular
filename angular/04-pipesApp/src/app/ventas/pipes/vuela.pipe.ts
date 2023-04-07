import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'vuela'
})
export class vuelaPipe implements PipeTransform{

    transform(estado:boolean) {
        if(estado){
            return 'si vuela';
        }else{
            return 'no vuela';
        }
    }
}