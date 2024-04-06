import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    pathMatch: 'full',
    title: 'Mapa',
    data: {
      title: 'Mapa',
    },
  },
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
];
