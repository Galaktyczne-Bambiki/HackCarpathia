import { Component, signal } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [GoogleMap, MatChipsModule, MatCardModule, MatIconModule]
})
export class MapComponent {
  center: google.maps.LatLngLiteral = {lat: 50.0301006, lng: 21.99981};
  zoom = 16;
  showTrafficDensity = signal(false)
  showRoadsQuality = signal(false)
}
