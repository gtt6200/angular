import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [`
    div {
      width: 100%;
      height: 150px;
      margin: 0px;
    }
  `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lngLat: [number, number] = [0,0];
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 13,
      interactive: false // starting zoom
    });
    new mapboxgl.Marker().setLngLat(this.lngLat).addTo(mapa);
  }

  

}
