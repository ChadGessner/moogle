import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit{
  markers: any;

    // addMarker() {
    //   this.markers.push({
    //     position: {
    //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
    //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
    //     },
    //     label: {
    //       color: 'red',
    //       text: 'Marker label ' + (this.markers.length + 1),
    //     },
    //     title: 'Marker title ' + (this.markers.length + 1),
    //     options: { animation: google.maps.Animation.BOUNCE },
    //   });
    // }
  










latitude = 38.897957;
longitude = -77.036560;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.latitude,
        lng: this.longitude,
      };
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }
 
  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }
}
