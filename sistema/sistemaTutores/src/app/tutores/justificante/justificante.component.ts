import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productservice';
import { Report } from '../interfaces/reporte.interface';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Alumno, GruposInterface, turnoAlumno } from '../interfaces/grupo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-justificante',
  providers: [MessageService],
  templateUrl: './justificante.component.html',
  styleUrls: ['./justificante.component.css']
})
export class JustificanteComponent implements OnInit {
  miFormulario: FormGroup = this._formB.group({
    fecha:[ ,[Validators.required]],
    seleccionGrupos:[ ,[Validators.required]],
    alumnoSelected:[ ,[Validators.required]],
    carrera:['Tecnologías de la Información y Comunicación' ,[Validators.required]],
    turnoSelected:[ ,[Validators.required]],
    variasFechas:[ ,[Validators.required]],
    razones: [' ' ,[Validators.required, Validators.maxLength(255)]]
  });


  products!: Report[];
  items!: MenuItem[];
  grupo: GruposInterface[]; 
  alumno: Alumno[];
  turno : turnoAlumno[];
  
  constructor(private _formB : FormBuilder,
              private messageService: MessageService,
              private productService: ProductService) {
    this.productService.getProductsSmall().then(data => this.products = data);
    this.grupo = [
      {name:'IRIC111V', periodo: new Date(2023, 1, 1)},
      {name:'IRIC81V', periodo: new Date(2023, 1, 1)}
    ];
    this.alumno = [
      {nombre:'Yuniel', apellido:'Duare',edad:20,matricula:'081813031'}
    ];
    this.turno = [
      {turno: 'Matutino'},
      {turno: 'Vespertino'}
    ];
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
      console.log('data enviada');
      console.log(this.miFormulario.value);
    }

  }

