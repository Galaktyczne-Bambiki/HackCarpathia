import { Component } from '@angular/core';
import { MapHeatmapLayer} from '@angular/google-maps';
import { trafficDensity } from '../../mocks';

@Component({
  selector: 'app-traffic-density',
  standalone: true,
  imports: [MapHeatmapLayer],
  templateUrl: './traffic-density.component.html',
  styleUrl: './traffic-density.component.css'
})
export class TrafficDensityComponent {
  heatmapData: Array<google.maps.visualization.WeightedLocation> = trafficDensity.features.map(({ geometry: {coordinates: [lng, lat]}, properties }) => ({
    location: new google.maps.LatLng({lat, lng}),
    weight: properties?.weight ?? ((Math.random() * 100) + 10)
  }))
  heatmapOptions: google.maps.visualization.HeatmapLayerOptions = {
    radius: 20
  }
}
