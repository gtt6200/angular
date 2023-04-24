import { Component, OnInit } from '@angular/core';
import { GruposInterface, Alumno } from '../interfaces/grupo.interface';
import { Report } from '../interfaces/reporte.interface';
import { ProductService } from '../../services/productservice';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-canalizacion-psicopedagogico',
  providers: [MessageService],
  templateUrl: './canalizacion-psicopedagogico.component.html',
  styleUrls: ['./canalizacion-psicopedagogico.component.css']
})
export class CanalizacionPsicopedagogicoComponent implements OnInit {

  miFormulario: FormGroup = this._formB.group({
    grupos: [ , [Validators.required]],
    alumnoSelected: [ , [Validators.required]],
    animo: [  , [Validators.required]],
    autoestima: [ , [Validators.required]],
    ansiedad: [ , [Validators.required]],
    indiciplica: [ , [Validators.required]],
    integracion: [ , [Validators.required]],
    pFamiliares: [ , [Validators.required]],
    concentracion: [ , [Validators.required]],
    motivacion: [ , [Validators.required]],
    renAcademico: [ , [Validators.required]],
    obsGrales: [ ' ' , [Validators.required, Validators.maxLength(255)]],
  });

  grupo: GruposInterface[];
  seleccionGrupos!: GruposInterface;
  alumno: Alumno[];
  alumnoSelected!: Alumno;
  tutor:string = 'jose irving martinez';
  stateOptions: any[];
  products!: Report[];
  selectedProducts!: Report[];
  items!: MenuItem[];

  constructor(private _formB : FormBuilder,
              private productService: ProductService,
              private messageService: MessageService) {
    this.grupo = [
      {name:'IRIC111V', periodo: new Date(2023, 1, 1)},
      {name:'IRIC81V', periodo: new Date(2023, 1, 1)}
    ];
    this.alumno = [
      {nombre:'Yuniel', apellido:'Duarte',edad:20,matricula:'081813031'}
    ];
    this.stateOptions = [{label: 'No', value: 'no'}, {label: 'Si', value: 'si'}];
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

}

