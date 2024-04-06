import { Component, ViewChild, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

export type Mode = 'list' | 'map';

export type TableData = {
  position: number;
  image: string;
  description: string;
  location: {
    lat: number,
    lng: number
  }
};

@Component({
  standalone: true,
  selector: 'app-dangerous-places',
  templateUrl: './dangerous-places.component.html',
  styleUrls: ['./dangerous-places.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    LightboxModule,
    GoogleMap,
    MapMarker,
    MapInfoWindow
  ],
})
export class DangerousPlacesComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  private lightbox = inject(Lightbox);
  public mode = signal<Mode>('list');
  data = signal<TableData[]>([
    {
      position: 1,
      description: 'Uwaga,kostka brukowa!',
      image:
        'https://bi.im-g.pl/im/86/20/ce/z13508742AMP,Odslonieta-podczas-remontu-ul--Piotrkowskiej-stara.jpg',
        location: {
          lng: 22.00008129045753,
          lat: 50.0311195911149
        }
    },
    {
      position: 2,
      description: 'Remont ulicy Lenartowicza',
      image: 'https://www.radio90.pl/files/2022/06/remont-drog_ogolne.jpg',
      location: {
        lng: 21.99888540763405,
          lat: 50.02961157227156
      }
    },
    {
      position: 3,
      description: 'Utrudnienia w ruchu na Placu Zamkowym',
      image:
        'https://bi.im-g.pl/im/5a/11/1b/z28382554AMP,Remonty-drog-w-powiecie-swiebodzinskim-.jpg',
        location: {
          lng: 21.999459532153082,
          lat: 50.03245498594305
        }
    },
    {
      position: 4,
      description: 'Zamknięte ulice z powodu maratonu!',
      image:
        'https://d-art.ppstatic.pl/kadry/k/r/1/57/47/55ceb28fb238f_o_large.jpg',
        location: {
          lng: 22.004321000483316,
          lat: 50.03071495608245
        }
    },
  ]);

  dataSource = this.data();
  displayedColumns: string[] = ['position', 'description', 'image'];
  center: google.maps.LatLngLiteral = {lat: 50.0301006, lng: 21.99981};
  zoom = 16;
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
  selectedItem?: TableData

  open(image: string, description: string): void {
    this.lightbox.open(
      [
        {
          src: image,
          caption: description,
          thumb: image,
        },
      ],
      0
    );
  }

  close(): void {
    this.lightbox.close();
  }

  openInfoWindow(marker: MapMarker, item: TableData) {
    this.selectedItem = item
    this.infoWindow.open(marker);
  }
}
