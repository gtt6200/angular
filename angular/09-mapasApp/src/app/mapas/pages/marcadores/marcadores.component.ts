import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container{
        height: 100%;
        width: 100%;
      }
      .list-group{
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }
      li{
        cursor: pointer;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('map') divMapa!: ElementRef;
  mapa !: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-105.66866488330368, 26.932143423270563];
  arregloMarcadores: MarcadorColor[] = [];


  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-105.66866488330368, 26.932143423270563 ], // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
   });
  //  const marker = new mapboxgl.Marker()
  //                             .setLngLat(this.center)
  //                             .addTo(this.mapa)
     this.leerLocalStorage();
  }
  agregarMarcador(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({draggable: true, color: color})
    .setLngLat(this.center)
    .addTo(this.mapa);

    this.arregloMarcadores.push( {
      color,
      marker: nuevoMarcador});
      this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', () => {
        this.guardarMarcadoresLocalStorage()
      });
  }
  irMarcador(marker: mapboxgl.Marker){
    
      this.mapa.flyTo(
        {
          center: marker.getLngLat()
        }
      );

  }

  guardarMarcadoresLocalStorage(){
    
    const lngLatArr: MarcadorColor[] = []

    this.arregloMarcadores.forEach(m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();
      lngLatArr.push({
        color: m.color,
        centro: [lng, lat]
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

  leerLocalStorage(){

    if(!localStorage.getItem('marcadores')){
      return;
    }
    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);
    
    lngLatArr.forEach(m=>{
        const newMarker = new mapboxgl.Marker({
          color: m.color,
          draggable: true
        }).setLngLat( m.centro!).addTo(this.mapa);

        this.arregloMarcadores.push({
          marker: newMarker,
          color: m.color
        });
      
        newMarker.on('dragend', () => {
          this.guardarMarcadoresLocalStorage()
        });
    });
    
  }

  borrarMarcador(i : number){
    this.arregloMarcadores[i].marker?.remove();
    this.arregloMarcadores.splice(i, 1);
    this.guardarMarcadoresLocalStorage()
  }

}
