import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      .mapa-container{
        height: 100%;
        width: 100%;
      }
      .row{
        background-color:  #ffffff;
        z-index: 999;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-105.66866488330368, 26.932143423270563 ], // starting position [lng, lat]
    zoom: 15, // starting zoom
});

  }

}
