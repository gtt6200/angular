import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent{

  nombreLower : string = "yuniel";
  nombreUpper : string = "YUNIEL";
  nombreCompleto : string = "YUniEl DuaRtE";

  fecha: Date = new Date(); //el dia de hoy
  
}
