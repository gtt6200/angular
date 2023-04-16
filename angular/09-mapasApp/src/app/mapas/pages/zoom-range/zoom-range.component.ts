import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        height: 100%;
        width: 100%;
      }
      .row{
        background-color:  #ffffff;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMapa!: ElementRef;
  mapa !: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-105.66866488330368, 26.932143423270563]

  constructor() { 
  }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    
      this.mapa = new mapboxgl.Map({
         container: this.divMapa.nativeElement, // container ID
         style: 'mapbox://styles/mapbox/streets-v12', // style URL
         center: [-105.66866488330368, 26.932143423270563 ], // starting position [lng, lat]
         zoom: this.zoomLevel, // starting zoom
      });

      this.mapa.on('zoom', (ev)=>{
        this.zoomLevel = this.mapa.getZoom();
      });
      this.mapa.on('zoomend', (ev)=>{
         if(this.mapa.getZoom() > 18){
          this.mapa.zoomTo(18);
         }
      });
      //movimiento del mapa
      this.mapa.on('move', (ev) => {
        const target = ev.target;
        const { lng, lat } = target.getCenter();
        this.center = [lng, lat];
      });
  }

  zoomOut(){
    this.mapa.zoomOut();
  }
  zoomIn(){
    this.mapa.zoomIn();
  }
  zoomCambio(valor: string){
    this.mapa.zoomTo( Number(valor));
    
  }

}
