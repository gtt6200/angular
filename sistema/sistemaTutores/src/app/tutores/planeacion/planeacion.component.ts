import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { GruposInterface } from '../interfaces/grupo.interface';
import { log } from 'console';

@Component({
  selector: 'app-planeacion',
  templateUrl: './planeacion.component.html',
  styleUrls: ['./planeacion.component.css']
})
export class PlaneacionComponent {

  miFormulario: FormGroup = this._formB.group({
    fecha:[ ,[Validators.required]],
    periodo: [ ,[Validators.required]],
    seleccionGrupos:[ ,[Validators.required]],
    tutor: ['aqui va el tutor' ,[Validators.required]],
    hombres:[10 ,[Validators.required]],
    mujeres:[11 ,[Validators.required]],
    total: [this.suma],
    sesiones: [ ,[Validators.required]],
    desGrupo: [ ,[Validators.required]],
    propositosGrales: [ ,[Validators.required]],
    temas: [ ,[Validators.required]],
    evidencias: [ ,[Validators.required]],
    tipo: [ ,[Validators.required]],
    desActividad: [ ,[Validators.required]],
    noSesiones: [ ,[Validators.required]],
    dateProgramada: [ ,[Validators.required]],
    dateReal: [ ,[Validators.required]],
    ptObservaciones: [ ,[Validators.required]],
  })
  dateOptions: any[];
  grupo: GruposInterface[]; 
  tutor:string = 'tutor_name';
  carrera:string = 'Redes Inteligentes y Ciberseguridad';



  constructor( private _formB: FormBuilder) { 
    this.dateOptions = [{label: 'Ene-Abr', value: 'Ene-Abr'}, {label: 'May-Ago', value: 'May-Ago'}, {label: 'Sep-Dic', value: 'Sep-Dic'}];
    this.grupo = [
      {name:'IRIC111V', periodo: new Date(2023, 1, 1)},
      {name:'IRIC81V', periodo: new Date(2023, 1, 1)}
    ];
  }

  ngOnInit() {
    
  }
  suma(){
    const hombre:number= this.miFormulario.value('hombres');
    const mujer:number= this.miFormulario.value('mujeres');
    return hombre+mujer;
  }
  guardar(){}
}
