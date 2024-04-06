import { Component, OnDestroy, OnInit, input } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';
import { roadsQuality } from '../../mocks';

@Component({
  selector: 'app-road-quality',
  standalone: true,
  imports: [],
  styleUrl: './road-quality.component.css',
  template: ''
})
export class RoadQualityComponent implements OnInit, OnDestroy {
  mapRef = input<GoogleMap>()
  features: google.maps.Data.Feature[] = []

  getQualityColor(quality: number) {
    switch (quality) {
      case 1:
        return 'red'
      case 2:
        return 'orange'
      case 3:
        return 'yellow'
      case 4:
        return 'lightgreen'
      case 5:
        return 'green'
      default:
        return undefined
    }
  }

  ngOnInit(): void {
    this.features = this.mapRef()?.data.addGeoJson(roadsQuality) ?? []

    this.mapRef()?.data.setStyle(feature => ({
      strokeColor: this.getQualityColor(Number(feature.getProperty('quality'))),
    }))
  }

  ngOnDestroy(): void {
    this.features.forEach(feature => this.mapRef()?.data.remove(feature))
  }
}
