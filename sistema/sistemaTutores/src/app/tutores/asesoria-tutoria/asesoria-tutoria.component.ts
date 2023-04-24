import { Component, OnInit } from '@angular/core';
import { GruposInterface, Alumno } from '../interfaces/grupo.interface';
import { Report } from '../interfaces/reporte.interface';
import { ProductService } from '../../services/productservice';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asesoria-tutoria',
  providers: [MessageService],
  templateUrl: './asesoria-tutoria.component.html',
  styleUrls: ['./asesoria-tutoria.component.css']
})
export class AsesoriaTutoriaComponent implements OnInit {
  miFormulario: FormGroup = this._formB.group({
    seleccionGrupos: [ ,[Validators.required]],
    periodo: [ ,[Validators.required]],
    tipoSesion: [ ,[Validators.required]],
    finalidad: [ ,[Validators.required]],
    fechaSesion: [ ,[Validators.required]],
    duracionTimer: [ ,[Validators.required]],
    alumnoSelected: [ ,[Validators.required]],
    temas: [' ' ,[Validators.required, Validators.maxLength(255)]],
    observacionesAsesor: [' ' ,[Validators.required, Validators.maxLength(255)]],
    tutor: ['aqui va el tutor' ,[Validators.required]],
    obsGrales: [' ' ,[Validators.required, Validators.maxLength(255)]]
  });


  grupo: GruposInterface[];
  alumno: Alumno[];
  tutor:string = 'tutor_name';
  stateOptions: any[];
  dateOptions: any[];
  sessionOptions: any[];
  finalOptions: any[];
  products!: Report[];
  items!: MenuItem[];
  constructor(private _formB : FormBuilder,
              private productService: ProductService,
              private messageService: MessageService) {
    this.grupo = [
      {name:'IRIC111V', periodo: new Date(2023, 1, 1)},
      {name:'IRIC81V', periodo: new Date(2023, 1, 1)}
    ];
    this.alumno = [
      {nombre:'Yuniel', apellido:'Duare',edad:20,matricula:'081813031'}
    ];
    this.stateOptions = [{label: 'No', value: 'no'}, {label: 'Si', value: 'si'}];
    this.dateOptions = [{label: 'Ene-Abr', value: 'Ene-Abr'}, {label: 'May-Ago', value: 'May-Ago'}, {label: 'Sep-Dic', value: 'Sep-Dic'}];
    this.sessionOptions = [{label: 'Asesoria', value: 'Asesoria'}, {label: 'Tutoría Individual', value: 'Tutoría Individual'}, {label: 'Tutoría Grupal', value: 'Tutoría Grupal'}];
    this.finalOptions = [{label: 'Preventiva', value: 'Preventiva'}, {label: 'Correctiva', value: 'Correctiva'}];

    this.productService.getProductsSmall().then(data => this.products = data);
    
   }
 
  ngOnInit(): void {
    this.items = [
      {label: 'Actualizar', icon: 'pi pi-refresh', command: () => {
          this.update();
      }},
      {label: 'Borrar', icon: 'pi pi-times', command: () => {
          this.delete();
      }}
  ];
  }
        save(severity: string) {
          this.messageService.add({severity: severity, summary:'Success', detail:'Datos Guardados'});
      }

        update() {
          this.messageService.add({severity:'success', summary:'Success', detail:'Datos Actualizados'});
      }

        delete() {
          this.messageService.add({severity:'success', summary:'Success', detail:'Datos Eliminados'});
      }
      guardar(){
        console.log(this.miFormulario.value);
        
      }
      

}

