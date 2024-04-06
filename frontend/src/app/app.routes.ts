import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DangerousPlacesComponent } from './dangerous-places/dangerous-places.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'WheelJourney',
    component: HomeComponent,
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        component: MapComponent,
        path: 'map',
        title: 'WheelJourney - mapa',
        data: {
          title: 'Mapa',
        },
      },
      {
        component: AboutComponent,
        path: 'about',
        title: 'WheelJourney - about',
        data: {
          title: 'Informacje',
        },
      },
      {
        component: DangerousPlacesComponent,
        path: 'dangerous-places',
        title: 'WheelJourney - niebezpieczne miejsca',
        data: {
          title: 'Niebezpiecznie miejsca',
        },
      },
    ],
  },
];
