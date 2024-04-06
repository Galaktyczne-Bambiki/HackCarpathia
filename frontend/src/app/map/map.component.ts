import { Component, ViewChild, signal } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TrafficDensityComponent } from '../traffic-density/traffic-density.component';
import { RoadQualityComponent } from '../road-quality/road-quality.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [GoogleMap, MatChipsModule, MatCardModule, MatIconModule, TrafficDensityComponent, RoadQualityComponent]
})
export class MapComponent {
  @ViewChild('mapRef') mapRef!: GoogleMap;
  center: google.maps.LatLngLiteral = {lat: 50.0301006, lng: 21.99981};
  zoom = 16;
  showTrafficDensity = signal(false)
  showRoadsQuality = signal(false)
  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ]
  }
}
